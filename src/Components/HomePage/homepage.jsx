import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HomePage = () => {
  return (
    <div className="main">
      <h1>Todo List</h1>
      <div className="btns">
        <Link to="/input">
          <button className="btn"> Add Task </button>{" "}
        </Link>
        <Link to="/list">
          <button className="btn"> View Tasks </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
