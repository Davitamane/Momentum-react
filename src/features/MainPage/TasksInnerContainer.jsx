import Task from "./Task";
import TaskStage from "./TaskStage";

function TasksInnerContainer({ id, name, tasks }) {
  const filteredTasks = tasks.filter((task) => task.status.id === id); // for putting them in correct container

  // console.log(filteredTasks);

  return (
    <div className="flex flex-col gap-4">
      <TaskStage children={name} id={id} />
      <div className="flex flex-col gap-4">
        {filteredTasks.map((task) => (
          <Task key={task.id} data={task} />
        ))}
      </div>
    </div>
  );
}

export default TasksInnerContainer;
