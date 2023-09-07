interface Props {
  taskInput: string;
  deadlineInput: string;
}

const TaskList = ({ taskInput, deadlineInput }: Props) => {
  return (
    <div className="taskContainer">Here is the list of open ToDo-tasks:</div>
  );
};

export default TaskList;
