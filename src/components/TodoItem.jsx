import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useContext(TodoContext);

  return (
    <li>
      <span
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
}