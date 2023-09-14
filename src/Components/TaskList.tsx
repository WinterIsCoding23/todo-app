import photo from "../images/lazyBone.jpg";

interface Props {
  todo: { id: number; newTask: string; newDeadline: string }[];
  deleteTask: (id: number) => void;
  editTask: (id: number) => void;
}

const TaskList = ({ todo, deleteTask, editTask }: Props) => {
  const sortedTodo = [...todo].reverse();

  return (
    <div className="taskContainer">
      {sortedTodo.length > 0 ? (
        sortedTodo.map((task, index) => (
          <div key={index} className="taskCard">
            <div className="taskDescription">
              <p className="font-bold">{task.newTask}</p>
              <p>Deadline:</p>
              <p>{task.newDeadline}</p>
            </div>
            <div className="taskButtons">
              <button className="editButton" onClick={() => editTask(task.id)}>
                Edit
              </button>
              <button
                className="deleteButton"
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
            src={photo}
            alt="yawning dog in front of white background"
            className="w-full h-auto object-contain rounded"
          />
        </div>
      )}
    </div>
  );
};

export default TaskList;
