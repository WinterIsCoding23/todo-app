import React from 'react';
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">The Ultimate ToDo-List</h1>
      </div>
      <div className="inputMask">
        <label htmlFor="task">Task</label>
        <input type="text" id="task" className="rounded" />
        <label htmlFor="deadline">Deadline</label>
        <input type="text" id="deadline" className="rounded" />
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
