import "./App.css";
import Controlled from "./components/Controlled";
import Counter from "./components/Counter";
import Debounce from "./components/Debounce";
import InputDebounce from "./components/InputDebounce";
import Modal from "./components/Modal";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <Modal /> */}
      {/* <Controlled /> */}
      {/* <Debounce /> */}
      <InputDebounce />
    </div>
  );
}

export default App;
