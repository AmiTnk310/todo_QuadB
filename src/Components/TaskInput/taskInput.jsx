import React, { useContext, useState } from "react";
import { TaskContext } from "../taskContext";
import "./style.css";
import { Link } from "react-router-dom";

function TaskInput() {
  const { setTasks } = useContext(TaskContext);
  const [currentTask, setCurrentTask] = useState("");

  // storing the input in array
  const handleAddTask = (event) => {
    event.preventDefault();
    if (currentTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, currentTask.trim()]);
      setCurrentTask("");
    }
  };

  return (
    <div className="input-main">
      <p className="heading">
        Enter Your Task{" "}
        <Link to="/list">
          <span
            style={{ color: "lightBlue", fontSize: "1rem", fontWeight: "500" }}
          >
            {" "}
            &#10548; Task List &nbsp;|
          </span>
        </Link>
        <Link to="/">
          <span
            style={{ color: "lightBlue", fontSize: "1rem", fontWeight: "500" }}
          >
            {" "}
            Home
          </span>
        </Link>
      </p>
      <form onSubmit={handleAddTask} className="form">
        <input
          type="text"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          placeholder="Write here..."
        />
        <button className="btn-2" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskInput;
