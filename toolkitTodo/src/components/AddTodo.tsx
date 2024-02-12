import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todo));
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

export default AddTodo;
