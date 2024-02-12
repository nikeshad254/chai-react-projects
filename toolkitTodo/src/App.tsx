import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col p-2 items-center my-5 mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold text-white mb-8">
          Todo Redux Toolkit
        </h1>

        <AddTodo />

        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
