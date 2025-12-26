import { useEffect, useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  //{value,isCompleted,id:time}
  console.log(todos);
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
  const handleClose = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const handleDone = (id) => {
    // console.log("inside handleDone", id);
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setTodos(newTodos);
  };
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
          <div className="" key={todo?.id}>
            {todo.isCompleted ? (
              <span style={{ textDecoration: "line-through" }}>
                {todo.value}
              </span>
            ) : (
              <span>{todo.value}</span>
            )}
            <span
              style={{ marginLeft: "1rem", cursor: "pointer" }}
              onClick={() => handleDone(todo.id)}
            >
              ✅
            </span>
            <span
              style={{ marginLeft: "1rem", cursor: "pointer" }}
              onClick={() => handleClose(todo.id)}
            >
              ❌
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
