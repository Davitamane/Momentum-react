import Task from "./Task";
import TaskStage from "./TaskStage";

function TasksContainer() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-8 max-w-screen">
      <div className="flex flex-col gap-2">
        <TaskStage />
        <div className="flex flex-col gap-1">
          <Task />
          <Task />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <TaskStage />

        <div className="flex flex-col gap-1">
          <Task />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <TaskStage />

        <div className="flex flex-col gap-1">
          <Task />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <TaskStage />
        <div className="flex flex-col gap-1">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default TasksContainer;
