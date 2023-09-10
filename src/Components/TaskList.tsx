interface Props {
  todo: { id: number; newTask: string; newDeadline: string }[];
  deleteTask: (id: number) => void;
  editTask: (id: number) => void;
}

const TaskList = ({ todo, deleteTask, editTask }: Props) => {
  const sortedTodo = [...todo].reverse();

  const numColumns = Math.min(4, Math.max(1, sortedTodo.length));

  return (
    <div
      className={`taskContainer grid grid-cols-${numColumns} gap-4 justify-center`}
    >
      {sortedTodo.length > 0 ? (
        sortedTodo.map((task, index) => (
          <div key={index} className="taskCard">
            <div className="taskDescription">
              <p className="font-bold">{task.newTask}</p>
              <p>Deadline: {task.newDeadline}</p>
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
        <p className="col-span-4 font-bold text-center sm:col-span-3 md:col-span-4 md:col-span-5">
          "Nothing to do? Oh come on - hit the keyboard and add some tasks!"
        </p>
      )}
    </div>
  );
};

export default TaskList;
