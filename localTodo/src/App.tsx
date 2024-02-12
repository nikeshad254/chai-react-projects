import { useEffect, useState } from "react";
import { ITodo, TodoProvider } from "./context";
import { TodoForm, TodoList } from "./components";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, isCompleted: false }]);
  };

  const updateTodo = (id: number, text: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // local storage fetch at first and update at all changes
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "");

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, removeTodo, updateTodo, toggleTodo }}
    >
      <div className="flex flex-col p-2 items-center my-5 mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold text-white mb-8">
          Todo Context + Local
        </h1>

        <TodoForm />

        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
