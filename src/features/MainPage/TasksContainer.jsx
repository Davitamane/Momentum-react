import { useQuery } from "@tanstack/react-query";
import { getStatuses } from "../../services/apiQuery";
import TasksInnerContainer from "./TasksInnerContainer";

function TasksContainer() {
  const statusQuery = useQuery({
    queryKey: ["status"],
    queryFn: getStatuses,
  });

  if (statusQuery.status === "loading") return null;

  // statusQuery.data?.forEach((status) => console.log(status));

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
