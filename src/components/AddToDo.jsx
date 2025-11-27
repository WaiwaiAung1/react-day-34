import React, { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function AddTodo() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}