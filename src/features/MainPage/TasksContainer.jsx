import { useQuery } from "@tanstack/react-query";
import { getStatuses, getTasks } from "../../services/apiQuery";
import TasksInnerContainer from "./TasksInnerContainer";
import { useContext } from "react";
import { MainPageContext } from "../../context/MainPageContext";

function TasksContainer() {
  const { filters } = useContext(MainPageContext);

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

  // Apply filtering to tasks
  const filteredTasks = tasksQuery.data.filter((task) => {
    const depMatch =
      filters.final.department.length === 0 ||
      filters.final.department.includes(task.department.id);

    const prioMatch =
      filters.final.priority.length === 0 ||
      filters.final.priority.includes(task.priority.id);

    const employeeMatch =
      !filters.final.employee || task.employee.id === filters.final.employee;

    return depMatch && prioMatch && employeeMatch;
  });

  return (
    <div className="grid grid-cols-4 gap-6 mt-8 max-w-screen">
      {statusQuery.data.map((status) => (
        <TasksInnerContainer
          key={status.id}
          id={status.id}
          name={status.name}
          tasks={filteredTasks.filter((task) => task.status.id === status.id)}
        />
      ))}
    </div>
  );
}

export default TasksContainer;
