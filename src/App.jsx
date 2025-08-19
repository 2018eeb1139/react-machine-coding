import { useEffect, useState } from "react";
import "./App.css";
import Controlled from "./components/Controlled";
import Counter from "./components/Counter";
import Debounce from "./components/Debounce";
import Dropdown from "./components/Dropdown";
import InputDebounce from "./components/InputDebounce";
import Modal from "./components/Modal";
import TodoList from "./components/TodoList";
import Tab from "./components/Tab";

const mockApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["apple", "orange", "grapes", "gauva", "banana"];
      resolve(data);
    }, 1000);
  });
};

const tabs = ["Tab1", "Tab2", "Tab3"];
const content = {
  Tab1: "Tab1 content1",
  Tab2: "Tab2 content2",
  Tab3: "Tab3 content3",
};

function App() {
  const [items, setItems] = useState([]);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
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

  const handleTabSelect = (value) => {
    // console.log(value);
    setSelectedTab(value);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <Modal /> */}
      {/* <Controlled /> */}
      {/* <Debounce /> */}
      {/* <InputDebounce /> */}
      {/* <Dropdown name="fruits" items={items} onSelect={handleOnSelect} /> */}
      {tabs.map((tab) => (
        <Tab
          key={tab}
          title={tab}
          onSelect={handleTabSelect}
          isActive={selectedTab === tab}
        />
      ))}
      {<p>{content[selectedTab]}</p>}
    </div>
  );
}

export default App;
