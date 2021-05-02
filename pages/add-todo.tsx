import React, { FormEvent, useState } from "react";
import { todosCollection } from "../firebase";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title) {
      try {
        setIsLoading(true);
        await todosCollection.add({
          title,
          isCompleted: false,
          createdAt: new Date().toLocaleString(),
        });
        setTitle("");
        alert("Todo added successfully!");
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    } else alert("Title is invalid!");
  };

  return (
    <div className="add-todo">
      <h2 className="title">Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="title-inputer"
          placeholder="Todo title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn-submit" type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
