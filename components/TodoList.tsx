import React, { useState } from "react";
import { todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface Props {
  todos: todo[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
  const [myTodos, setMyTodos] = useState<todo[]>(todos);

  const deleteTodo = (id: string) => {
    const filteredTodos = myTodos.filter((todo) => todo.id !== id);
    setMyTodos(filteredTodos);
  };

  return (
    <div className="todo-list">
      <div className="header">
        <h2 className="title">Todo List</h2>
        <div className="badge">
          <h5>{myTodos.length}</h5>
        </div>
      </div>
      <ul className="todo-menu">
        {myTodos.length !== 0 ? (
          myTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))
        ) : (
          <li className="todo-item">No todos left</li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
