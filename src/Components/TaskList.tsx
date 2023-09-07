interface Props {
  formInput: {
    task: string;
    deadline: string;
  };
}

const TaskList = ({ formInput }: Props) => {
  console.log(formInput, "in TaskList");
  return (
    <div className="taskContainer">
      <h3>Here is the list of open ToDo-tasks:</h3>
      <p>{formInput.task}</p>
      <p>{formInput.deadline}</p>
    </div>
  );
};

export default TaskList;
