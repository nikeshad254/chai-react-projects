import { createContext, useContext } from "react";

export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface ITodoContext {
  todos: ITodo[];
  addTodo: (text: string) => void;
  updateTodo: (id: number, text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoContext = createContext<ITodoContext>({
  todos: [],
  updateTodo: () => {},
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
