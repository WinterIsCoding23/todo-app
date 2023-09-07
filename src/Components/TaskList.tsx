interface Props {
  todo: { newTask: string; newDeadline: string }[];
}

const TaskList = ({ todo }: Props) => {
  console.log(todo, "in TaskList");

  const sortedTodo = [...todo].reverse();

  return (
    <div className="taskContainer">
      {/* <h3>Here is the list of open ToDo-tasks:</h3> */}
      {sortedTodo.length > 0 ? (
        sortedTodo.map((task, index) => (
          <div className="taskCard">
            <div className="taskDescription" key={index}>
              <p className="font-bold">{task.newTask}</p>
              <p>{task.newDeadline}</p>
            </div>
            <div className="taskButtons">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>"Don't have anything to do? Get moving and add some tasks!"</p>
      )}
    </div>
  );
};

export default TaskList;
