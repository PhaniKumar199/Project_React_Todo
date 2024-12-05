import React, { useState } from "react";
import "./index.css";

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add Task
  const addTask = () => {
    if (input.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    setTasks([...tasks, { text: input, id: Date.now() }]);
    setInput("");
  };

  // Edit Task
  const editTask = (id) => {
    const newTask = prompt("Edit your task:");
    if (newTask) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: newTask.trim() } : task
        )
      );
    }
  };

 
 

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className="task-text">{task.text}</span>
           
            <button className="edit-btn" onClick={() => editTask(task.id)}>
              Edit
            </button>



          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
