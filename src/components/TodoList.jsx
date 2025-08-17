import "../App.css";
import { useState } from "react";

export default function TodoList() {
  const [inputVal, setInputVal] = useState("");
  const [taskId, setTaskId] = useState(0);
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editChange, setEditChange] = useState();
  const [selectedTask, setSelectedTask] = useState(null);
  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleAddTask = () => {
    setTaskId((prev) => prev + 1);
    const taskObj = {
      id: taskId,
      title: inputVal,
    };
    setTasks([...tasks, taskObj]);
    setInputVal("");
  };
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleEditTask = (id) => {
    setOpen(true);
    const editedTask = tasks.filter((task) => task.id === id);

    setSelectedTask(editedTask);
    setEditChange(editedTask[0].title);
  };
  // console.log(tasks);
  // console.log("Edited Task", selectedTask);
  const handleSave = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: editChange } : task
      )
    );

    setOpen(false);
  };
  return (
    <div className="App">
      <input type="text" value={inputVal} onChange={handleInputChange} />
      <button onClick={handleAddTask} disabled={!inputVal}>
        Add Task
      </button>
      {tasks.length === 0 ? (
        <p>Click on add task to add a task</p>
      ) : (
        tasks.map((task) => (
          <div className="" key={task.id}>
            {task.title}
            <button onClick={() => handleEditTask(task.id)}>edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>delete</button>
          </div>
        ))
      )}
      {open && (
        <>
          <input
            type="text"
            value={editChange}
            onChange={(e) => setEditChange(e.target.value)}
          />{" "}
          <button onClick={() => handleSave(selectedTask[0].id)}>save</button>
        </>
      )}
    </div>
  );
}
