import React, { FormEvent, useState } from "react";
import "./index.css";
import "./App.css";
import TaskList from "./Components/TaskList";

function App() {
  const [formInput, setFormInput] = useState({ task: "", deadline: "" });
  const [todo, setTodo] = useState<{ newTask: string; newDeadline: string }[]>(
    []
  );

  function addTask(e: FormEvent<HTMLFormElement>): void {
    const newTask = {
      newTask: formInput.task,
      newDeadline: formInput.deadline,
    };

    setTodo([...todo, newTask]);
    console.log("newTask:", newTask);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const taskValue = formData.get("task") as string;
    const deadlineValue = formData.get("deadline") as string;
    console.log("Task:", taskValue);
    console.log("Deadline:", deadlineValue);

    // const formJson: Record<string, FormDataEntryValue> = Object.fromEntries(
    //   formData.entries()
    // );
    // console.log(formJson.task, formJson.deadline);

    addTask(e);
    setFormInput({ task: "", deadline: "" });
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
          value={formInput.task}
          onChange={(e) => setFormInput({ ...formInput, task: e.target.value })}
          className="rounded w-auto min-w-[300px]"
          placeholder="Write your task here..."
        />
        <label htmlFor="deadline" className="my-2 font-bold">
          Deadline
        </label>
        <input
          type="text"
          id="deadline"
          name="deadline"
          value={formInput.deadline}
          onChange={(e) =>
            setFormInput({ ...formInput, deadline: e.target.value })
          }
          className="rounded w-auto min-w-[300px]"
          placeholder="When should this task be completed?"
        />
        <button type="submit" className="inputButton">
          OK
        </button>
      </form>
      <TaskList todo={todo} />
    </div>
  );
}

export default App;
