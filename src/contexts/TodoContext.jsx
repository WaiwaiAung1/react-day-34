import React, { createContext, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (text) => dispatch({ type: "ADD_TODO", payload: text });
  const toggleTodo = (id) => dispatch({ type: "TOGGLE_TODO", payload: id });
  const removeTodo = (id) => dispatch({ type: "REMOVE_TODO", payload: id });

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
