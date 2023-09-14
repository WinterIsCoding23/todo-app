import React, { useState } from "react";
import lazy from "../images/lazyBone.jpg";
import jump from "../images/jump.jpg";

interface Props {
  todo: { id: number; newTask: string; newDeadline: string }[];
  deleteTask: (id: number) => void;
  editTask: (id: number) => void;
}

const TaskList = ({ todo, deleteTask, editTask }: Props) => {
  const sortedTodo = [...todo].reverse();

  const [imageSrc, setImageSrc] = useState(lazy);
  const [imageAlt, setImageAlt] = useState(
    "yawning dog in front of white background"
  );

  const handleImageHover = () => {
    setImageSrc(jump);
    setImageAlt("three happy jumping people");
  };

  const handleImageLeave = () => {
    setImageSrc(lazy);
    setImageAlt("yawning dog in front of white background");
  };

  return (
    <div className="taskContainer">
      {sortedTodo.length > 0 ? (
        sortedTodo.map((task, index) => (
          <div key={index} className="taskCard">
            <div className="taskDescription">
              <p className="font-bold">{task.newTask}</p>
              <p className="italic">Deadline:</p>
              <p>{task.newDeadline}</p>
            </div>
            <div className="taskButtons">
              <button
                className="editButton w-14 flex justify-center items-center"
                onClick={() => editTask(task.id)}
              >
                Edit
              </button>
              <button
                className="deleteButton w-14 flex justify-center items-center"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="defaultContainer">
          <p className="defaultMessage">
            "Nothing to do? Oh come on - stop being lazy and add some tasks!"
          </p>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-contain rounded hover:scale-110"
            onMouseOver={handleImageHover}
            onMouseLeave={handleImageLeave}
          />
        </div>
      )}
    </div>
  );
};

export default TaskList;
