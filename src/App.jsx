import { useEffect, useState } from "react";
import "./App.css";
import Controlled from "./components/Controlled";
import Counter from "./components/Counter";
import Debounce from "./components/Debounce";
import Dropdown from "./components/Dropdown";
import InputDebounce from "./components/InputDebounce";
import Modal from "./components/Modal";
import TodoList from "./components/TodoList";

const mockApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["apple", "orange", "grapes", "gauva", "banana"];
      resolve(data);
    }, 1000);
  });
};

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await mockApi();
        setItems(res);
      } catch (error) {
        setItems([]);
      }
    };
    fetchData();
  }, []);
  const handleOnSelect = (value) => {
    console.log(value);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <Modal /> */}
      {/* <Controlled /> */}
      {/* <Debounce /> */}
      {/* <InputDebounce /> */}
      <Dropdown name="fruits" items={items} onSelect={handleOnSelect} />
    </div>
  );
}

export default App;
