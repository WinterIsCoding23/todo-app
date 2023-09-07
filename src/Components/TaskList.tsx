interface Props {
  todo: { newTask: string; newDeadline: string }[];
}

const TaskList = ({ todo }: Props) => {
  console.log(todo, "in TaskList");

  const sortedTodo = [...todo].reverse();

  return (
    <div className="taskContainer">
      <h3>Here is the list of open ToDo-tasks:</h3>
      {sortedTodo.length > 0 ? (
        sortedTodo.map((task, index) => (
          <div key={index}>
            <p>{task.newTask}</p>
            <p>{task.newDeadline}</p>
          </div>
        ))
      ) : (
        <p>"Don't have anything to do? Get moving and add some tasks!"</p>
      )}
    </div>
  );
};

export default TaskList;
