import React, { FormEvent, useState } from "react";
import "./index.css";
import "./App.css";
import TaskList from "./Components/TaskList";

function App() {
  const [formInput, setFormInput] = useState({ id: 0, task: "", deadline: "" });
  const [todo, setTodo] = useState<
    { id: number; newTask: string; newDeadline: string }[]
  >([]);
  const [id, setId] = useState(0);

  function addTask(e: FormEvent<HTMLFormElement>): void {
    const newTask = {
      id,
      newTask: formInput.task,
      newDeadline: formInput.deadline,
    };

    setTodo([...todo, newTask]);
    setId(id + 1);
  }

  function deleteTask(id: number): void {
    const updatedTodos = todo.filter((todo) => todo.id !== id);
    setTodo(updatedTodos);
  }

  const editTask = (id: number): void => {
    const taskToEdit = todo.find((task) => task.id === id);

    if (taskToEdit) {
      const newTask = prompt("Edit Task:", taskToEdit.newTask);
      const newDeadline = prompt("Edit Deadline:", taskToEdit.newDeadline);

      if (newTask === null || newDeadline === null) {
        return;
      }

      taskToEdit.newTask = newTask;
      taskToEdit.newDeadline = newDeadline;

      setTodo([...todo]);
    }
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const taskValue = formData.get("task") as string;
    const deadlineValue = formData.get("deadline") as string;

    // const formJson: Record<string, FormDataEntryValue> = Object.fromEntries(
    //   formData.entries()
    // );
    // console.log(formJson.task, formJson.deadline);

    if (taskValue !== "" && deadlineValue !== "") {
      addTask(e);
    }
    setFormInput({ id, task: "", deadline: "" });
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">The Ultimate ToDo-List</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputMask">
          <label htmlFor="task" className="my-2 font-bold">
            Task
          </label>
          <input
            type="text"
            id="task"
            name="task"
            maxLength={20}
            value={formInput.task}
            onChange={(e) =>
              setFormInput({ ...formInput, task: e.target.value })
            }
            className="rounded w-auto min-w-[300px]"
            placeholder="Write your task here..."
            required
          />
          <label htmlFor="deadline" className="my-2 font-bold">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formInput.deadline}
            onChange={(e) =>
              setFormInput({ ...formInput, deadline: e.target.value })
            }
            className="rounded w-auto min-w-[300px]"
            placeholder="When should this task be completed?"
            required
          />
          <button type="submit" className="inputButton">
            OK
          </button>
        </div>
      </form>
      <TaskList todo={todo} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
