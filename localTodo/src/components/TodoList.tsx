import { TodoItem } from ".";
import { useTodo } from "../context";

function TodoList() {
  const { todos } = useTodo();

  return (
    <div role="ul" className=" w-full grid gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
