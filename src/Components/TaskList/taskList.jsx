import React, { useContext, useState } from "react";
import { TaskContext } from "../taskContext";
import "./style.css";
import { ImBin2 } from "react-icons/im";
import { Link } from "react-router-dom";

function TaskList() {
  const { tasks, setTasks } = useContext(TaskContext);
  // const [complete , setComplete] = useState(false)

  const deleteTask = (index) => {
    // update tasks by filtering out the task at the given index
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };


  return (
    <div className="list-container">
      <p>
        Your Tasks{" "}
        <Link to="/input">
          <span
            style={{ color: "lightBlue", fontSize: "1rem", fontWeight: "500" }}
          >
            {" "}
            + Add task |
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
      <div className="list">
        {tasks.map((item, index) => {
          return (
            <div className="card">
              <div className="task">
                <span style={{ fontWeight: "700", color: "green" }}>
                  {index + 1}-
                </span>{" "}
                {item}
              </div>
              <div className="dlt-btn">
                <button onClick={() => deleteTask(index)}>
                  <ImBin2 fontSize={35} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskList;
