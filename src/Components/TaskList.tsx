interface Props {
  todo: { newTask: string; newDeadline: string }[];
}

const TaskList = ({ todo }: Props) => {
  console.log(todo, "in TaskList");
  return (
    <div className="taskContainer">
      <h3>Here is the list of open ToDo-tasks:</h3>
      {todo.length > 0 ? (
        todo.map((task, index) => (
          <div key={index}>
            <p>{task.newTask}</p>
            <p>{task.newDeadline}</p>
          </div>
        ))
      ) : (
        <p>"You're lucky, looks like you don't have anything to do."</p>
      )}
    </div>
  );
};

export default TaskList;
