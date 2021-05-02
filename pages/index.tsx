import { FC } from "react";
import { DocumentData } from "@firebase/firestore-types";
import { todosCollection } from "../firebase";
import { todo } from "../types/todo";
import TodoList from "../components/TodoList";

export const getServerSideProps = async () => {
  const response = (await todosCollection
    .orderBy("createdAt")
    .get()) as DocumentData;

  const todos: todo[] = response.docs.map((doc: DocumentData) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      todos: todos.reverse(),
    },
  };
};

interface Props {
  todos: todo[];
}

const App: FC<Props> = ({ todos }) => {
  return (
    <div className="app">
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
