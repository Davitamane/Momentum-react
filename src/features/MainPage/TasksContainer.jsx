import { Link } from "react-router-dom";
import Task from "./Task";
import TaskStage from "./TaskStage";

function TasksContainer() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-8 max-w-screen">
      <Link to="/details">
        <div className="flex flex-col gap-2">
          <TaskStage children="დასაწყები" id={1} />
          <div className="flex flex-col gap-4">
            <Task />
            <Task />
          </div>
        </div>
      </Link>

      <div className="flex flex-col gap-2">
        <TaskStage children="პროგრესში" id={2} />
        <div className="flex flex-col gap-1">
          <Task />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <TaskStage children="მზად ტესტირებისთვის" id={3} />
        <div className="flex flex-col gap-1">
          <Task />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <TaskStage children="დასრულებული" id={4} />
        <div className="flex flex-col gap-1">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default TasksContainer;
