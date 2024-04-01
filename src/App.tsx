import React from "react";
import "./App.css";
import TodoCounter from "./Components/TodoCounter/TodoCounter";
import Input from "./Components/Input/Input";
import TaskList from "./Components/Task/TaskList";
import ExternalTaskList from "./Components/Task/ExternalTaskList";

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <Input />
      <TaskList />

      <ExternalTaskList />
    </div>
  );
}

export default App;
