import React, { FormEvent, useState } from "react";
import "./index.css";
import "./App.css";
import TaskList from "./Components/TaskList";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [deadlineInput, setDeadlineInput] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const taskValue = formData.get("task") as string;
    const deadlineValue = formData.get("deadline") as string;
    console.log(taskValue, deadlineValue);

    // const formJson: Record<string, FormDataEntryValue> = Object.fromEntries(
    //   formData.entries()
    // );
    // console.log(formJson.task, formJson.deadline);

    setTaskInput("");
    setDeadlineInput("");
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">The Ultimate ToDo-List</h1>
      </div>
      <form className="inputMask" onSubmit={handleSubmit}>
        <label htmlFor="task" className="my-2 font-bold">
          Task
        </label>
        <input
          type="text"
          id="task"
          name="task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="rounded  w-auto min-w-[300px]"
          placeholder="Write your task here..."
        />
        <label htmlFor="deadline" className="my-2 font-bold">
          Deadline
        </label>
        <input
          type="text"
          id="deadline"
          name="deadline"
          value={deadlineInput}
          onChange={(e) => setDeadlineInput(e.target.value)}
          className="rounded w-auto min-w-[300px]"
          placeholder="When should this task be completed?"
        />
        <button type="submit" className="inputButton">
          OK
        </button>
      </form>
      <TaskList taskInput={taskInput} deadlineInput={deadlineInput} />
    </div>
  );
}

export default App;
