import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState<string>("");

  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo || !todo.trim()) return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="flex w-full mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full rounded-l py-2 px-4"
        placeholder="What needs to be done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-400 text-white rounded-r px-4"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
