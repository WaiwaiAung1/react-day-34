import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <h1>React Day 33 - Todo App</h1>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default App;