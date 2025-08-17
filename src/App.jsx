import "./App.css";
import Controlled from "./components/Controlled";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <Modal /> */}
      <Controlled />
    </div>
  );
}

export default App;
