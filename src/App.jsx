import { useContext, useEffect, useState } from "react";
import "./App.css";
import Controlled from "./components/Controlled";
import Counter from "./components/Counter";
import Debounce from "./components/Debounce";
import Dropdown from "./components/Dropdown";
import InputDebounce from "./components/InputDebounce";
import Modal from "./components/Modal";
import TodoList from "./components/TodoList";
import Tab from "./components/Tab";
import Table from "./components/Table";
import { UserContext } from "./context/UserContext";
import { UserContextProvider } from "./context/UserContextProvider";
import InfiniteScroll from "./components/InfiniteScroll";
import useCounter from "./hooks/useCounter";
import Stopwatch from "./components/Stopwatch";

const mockApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["apple", "orange", "grapes", "gauva", "banana"];
      resolve(data);
    }, 1000);
  });
};

const mockUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          name: "Aman",
          email: "aman@gmail.com",
          age: 23,
        },
        {
          name: "Harshit",
          email: "harshit@gmail.com",
          age: 24,
        },
        {
          name: "Vivek",
          email: "vivek@gmail.com",
          age: 25,
        },
      ];
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
  const { count, increment, decrement, reset } = useCounter(10);

  const handleOnSelect = (value) => {
    console.log(value);
  };

  const handleTabSelect = (value) => {
    // console.log(value);
    setSelectedTab(value);
  };
  return (
    <UserContextProvider>
      <div className="min-h-screen flex justify-center items-center">
        {/* <Counter /> */}
        {/* <TodoList /> */}
        {/* <Modal /> */}
        {/* <Controlled /> */}
        {/* <Debounce /> */}
        {/* <InputDebounce /> */}
        {/* <Dropdown name="fruits" items={items} onSelect={handleOnSelect} /> */}
        {/* {tabs.map((tab) => (
        <Tab
          key={tab}
          title={tab}
          onSelect={handleTabSelect}
          isActive={selectedTab === tab}
        />
      ))}
      {<p>{content[selectedTab]}</p>} */}
        {/* <Table title="Users" /> */}
        {/* <InfiniteScroll /> */}

        {/* <button>{count}</button>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button> */}
        <Stopwatch />
      </div>
    </UserContextProvider>
  );
}

export default App;
