import React, { FormEvent } from "react";
import "./index.css";
import "./App.css";
import TaskList from "./Components/TaskList";

function App() {
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const formJson: Record<string, FormDataEntryValue> = Object.fromEntries(
      formData.entries()
    );
    console.log(formJson);
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
          className="rounded w-auto min-w-[300px]"
          placeholder="When should this task be completed?"
        />
        <button type="submit" className="inputButton">
          OK
        </button>
      </form>
      <TaskList />
    </div>
  );
}

export default App;
