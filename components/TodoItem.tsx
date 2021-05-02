import React, { useState } from "react";
import { todosCollection } from "../firebase";
import { todo } from "../types/todo";

interface Props {
  todo: todo;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, deleteTodo }) => {
  const [myTodo, setMyTodo] = useState<todo>(todo);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isCompleteLoading, setIsCompleteLoading] = useState(false);
  const [isUndoLoading, setIsUndoLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleteLoading(true);
      await todosCollection.doc(todo.id).delete();
      deleteTodo(todo.id);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const handleComplete = async () => {
    try {
      setIsCompleteLoading(true);
      await todosCollection.doc(todo.id).update({
        isCompleted: true,
      });
      setMyTodo((state) => ({
        ...state,
        isCompleted: true,
      }));
    } catch (error) {
      alert(error.message);
    } finally {
      setIsCompleteLoading(false);
    }
  };

  const handleUndo = async () => {
    try {
      setIsUndoLoading(true);
      await todosCollection.doc(todo.id).update({
        isCompleted: false,
      });
      setMyTodo((state) => ({
        ...state,
        isCompleted: false,
      }));
    } catch (error) {
      alert(error.message);
    } finally {
      setIsUndoLoading(false);
    }
  };

  return (
    <li
      className="todo-item"
      data-status={myTodo.isCompleted ? "completed" : "incomplete"}
    >
      <div className="content">
        <p className="title">{myTodo.title}</p>
        <sub className="created-at">{myTodo.createdAt}</sub>
      </div>
      <div className="actions">
        {myTodo.isCompleted ? (
          <button
            className="btn-undo"
            onClick={handleUndo}
            disabled={isUndoLoading}
          >
            {isUndoLoading ? "Undoing" : "undo"}
          </button>
        ) : (
          <button
            className="btn-complete"
            onClick={handleComplete}
            disabled={isCompleteLoading}
          >
            {isCompleteLoading ? "Completing" : "Complete"}
          </button>
        )}

        <button className="btn-delete" onClick={handleDelete}>
          {isDeleteLoading ? "Deleting" : "Delete"}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
