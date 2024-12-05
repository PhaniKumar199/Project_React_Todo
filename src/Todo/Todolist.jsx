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
           




          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
