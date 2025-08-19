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

  if (statusQuery.status !== "success") return null;
  if (tasksQuery.status !== "success") return null;

  return (
    <div className="grid grid-cols-4 gap-6 mt-8 max-w-screen">
      {statusQuery.data.map((status) => (
        <TasksInnerContainer
          key={status.id}
          id={status.id}
          name={status.name}
          tasks={tasksQuery.data} 
        />
      ))}
    </div>
  );
}

export default TasksContainer;
