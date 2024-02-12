import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  text: string;
  isComplete: boolean;
}

export interface ITodoState {
  todos: ITodo[];
}

const initialState: ITodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload, isComplete: false };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },

    toggleCompleteTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleCompleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
