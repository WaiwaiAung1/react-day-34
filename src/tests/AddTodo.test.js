import { render, screen, fireEvent } from "@testing-library/react";
import { TodoProvider } from "../contexts/TodoContext";
import AddTodo from "../components/AddTodo";

test("adds new todo", () => {
  render(
    <TodoProvider>
      <AddTodo />
    </TodoProvider>
  );

  const input = screen.getByPlaceholderText("Add new todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.click(button);

  expect(input.value).toBe("");
});