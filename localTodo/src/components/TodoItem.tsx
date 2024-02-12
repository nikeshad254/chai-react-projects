import { useState } from "react";
import { ITodo, useTodo } from "../context";

interface ITodoItemProps {
  todo: ITodo;
}

function TodoItem({ todo }: ITodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const { removeTodo, toggleTodo, updateTodo } = useTodo();

  const handleUpdateTodo = () => {
    if (!editText || !editText.trim()) return;
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex w-full rounded-md p-2 gap-2 items-center ${
        todo.isCompleted ? "bg-slate-300" : "bg-white"
      }`}
    >
      <input
        type="checkbox"
        className=" cursor-pointer"
        defaultChecked={todo.isCompleted}
        onClick={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <input
          type="text"
          className="focus:outline-none w-full"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          autoFocus
        />
      ) : (
        <h2
          className={`${todo.isCompleted ? "line-through text-slate-400" : ""}`}
        >
          {todo.text}
        </h2>
      )}

      <div className=" ml-auto flex gap-2">
        {isEditing ? (
          <button className=" hover:bg-blue-50" onClick={handleUpdateTodo}>
            <i>✔️</i>
          </button>
        ) : (
          <button
            className=" hover:bg-blue-50"
            onClick={() => setIsEditing(true)}
          >
            <i>📝</i>
          </button>
        )}

        <button
          className=" hover:bg-blue-50"
          onClick={() => removeTodo(todo.id)}
        >
          <i>❌</i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
