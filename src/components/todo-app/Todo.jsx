import { useCallback, useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  //{value,isCompleted,id:time}
  // console.log(todos);
  const handleAdd = () => {
    const newTask = {
      value: task,
      isCompleted: false,
      id: new Date().getTime(),
    };
    setTodos((prevTodos) => {
      return [...prevTodos, { ...newTask }];
    });
    setTask("");
  };
  const handleKeyDown = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  const handleClose = useCallback((id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  }, []);
  const handleDone = useCallback((id) => {
    // console.log("inside handleDone", id);
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });
    });
  }, []);

  const handleUpdate = useCallback((id, updatedValue) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, value: updatedValue };
        } else {
          return todo;
        }
      });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="todo-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add Task</button>
      <div className="">
        {todos?.map((todo) => (
          <TodoItem
            todo={todo}
            handleDone={handleDone}
            handleClose={handleClose}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}
