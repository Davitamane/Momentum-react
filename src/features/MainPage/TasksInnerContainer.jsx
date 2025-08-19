import { useQuery } from "@tanstack/react-query";
import Task from "./Task";
import TaskStage from "./TaskStage";
import { getTasks } from "../../services/apiQuery";

function TasksInnerContainer({ id, name }) {
  const tasksQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  if (tasksQuery.status === "loading") return null;

  return (
    <div className="flex flex-col gap-">
      <TaskStage children={name} id={id} />
      <div className="flex flex-col gap-4">
        {tasksQuery.data?.map(
          (task) => task.status.id === id && <Task key={task.id} data={task} />
        )}
      </div>
    </div>
  );
}

export default TasksInnerContainer;
