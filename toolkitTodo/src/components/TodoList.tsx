import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { RootState } from "../app/store";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);
  return (
    <div role="ul" className=" w-full grid gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
