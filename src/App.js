// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/homepage";
import TaskList from "./Components/TaskList/taskList";
import TaskInput from "./Components/TaskInput/taskInput";
import { TaskProvider } from "./Components/taskContext";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list" element={<TaskList />} />
            <Route path="/input" element={<TaskInput />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </div>
  );
}

export default App;
