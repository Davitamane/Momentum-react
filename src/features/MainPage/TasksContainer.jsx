import { useQuery } from "@tanstack/react-query";
import { getStatuses, getTasks } from "../../services/apiQuery";
import TasksInnerContainer from "./TasksInnerContainer";

function TasksContainer() {
  const statusQuery = useQuery({
    queryKey: ["status"],
    queryFn: getStatuses,
  });

  const tasksQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (statusQuery.status === "loading") return null;
  if (tasksQuery.status === "loading") return null;

  const tasksByStatus = tasksQuery.data?.reduce((acc, task) => {
    if (!acc[task.status.id]) acc[task.status.id] = [];
    acc[task.status.id].push(task);
    return acc;
  }, {});
  console.log(tasksByStatus);

  return (
    <div className="grid grid-cols-4 gap-6 mt-8 max-w-screen">
      {statusQuery.data?.map((status) => (
        <TasksInnerContainer
          key={status.id}
          id={status.id}
          name={status.name}
        />
      ))}
    </div>
  );
}

export default TasksContainer;
