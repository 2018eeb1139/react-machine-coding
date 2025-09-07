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
import Countdown from "./components/Countdown";
import StarRating from "./components/StarRating";
import TabForm from "./components/TabForm";
import ProgressBar from "./components/ProgressBar";
import Chips from "./components/Chips";
import Accordion from "./components/Accordion";
import FileExplorer from "./components/FileExplorer";
import data from "../data.json";
import Stepper from "./components/Stepper";

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
const bars = [5, 25, 50, 75, 100];

const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript.",
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React.",
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js.",
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js.",
  },
];

const steps = [
  {
    label: "Personal Info",
    content: <div>Personal Info Content</div>,
  },
  {
    label: "Contact Info",
    content: <div>Contact Content</div>,
  },
  {
    label: "Address Info",
    content: <div>Address Info Content</div>,
  },
  {
    label: "Review Info",
    content: <div>Review Info Content</div>,
  },
  {
    label: "Completed",
    content: <div>Completed Content</div>,
  },
];

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
      <div className="min-h-screen justify-center items-center">
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
        {/* <Stopwatch /> */}
        {/* <Countdown /> */}
        {/* <StarRating startCount={10} /> */}
        {/* <TabForm /> */}
        {/* {bars.map((value) => (
          <ProgressBar key={value} progress={value} />
        ))} */}
        {/* <Toast variant="success" /> */}
        {/* <Chips /> */}
        {/* <Accordion items={items} /> */}
        {/* <FileExplorer folderData={data} /> */}
        <Stepper steps={steps} />;
      </div>
    </UserContextProvider>
  );
}

export default App;
