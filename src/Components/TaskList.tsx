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

  const [showJumpImage, setShowJumpImage] = useState(false);
  const [imageAlt, setImageAlt] = useState(
    "yawning dog in front of white background"
  );

  const handleImageHover = () => {
    if (!showJumpImage) {
      setShowJumpImage(true);
      setImageAlt("the happy jumping people");
    }
  };

  const handleImageLeave = () => {
    if (showJumpImage) {
      setShowJumpImage(false);
      setImageAlt("yawning dog in front of white background");
    }
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
          <div
            className="relative w-full aspect-[16/9] overflow-hidden rounded"
            onMouseOver={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <img
              src={lazy}
              alt={imageAlt}
              className={`absolute w-full h-full object-cover rounded transition-opacity duration-1000 ${
                showJumpImage ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={jump}
              alt={imageAlt}
              className={`w-full h-full object-cover rounded transition-opacity duration-1000 ${
                showJumpImage ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
