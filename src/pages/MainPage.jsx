import TasksContainer from "../features/MainPage/TasksContainer";
import Settings from "../features/MainPage/Settings";
import SettingsFiltering from "../features/MainPage/SettingsFiltering";
import FilterContainer from "../features/MainPage/FilterContainer";
import { useContext, useEffect } from "react";
import { MainPageContext } from "../context/MainPageContext";
import { useQuery } from "@tanstack/react-query";
import {
  getDepartments,
  getEmployees,
  getPriorities,
} from "../services/apiQuery";

function MainPage() {
  const { open, setOpen, dispatch } = useContext(MainPageContext);

  const prioritiesQuery = useQuery({
    queryKey: ["priorities"],
    queryFn: () => getPriorities(),
  });

  const departmentsQuery = useQuery({
    queryKey: ["departments"],
    queryFn: () => getDepartments(),
  });

  const employeesQuery = useQuery({
    queryKey: ["employees"],
    queryFn: () => getEmployees(),
  });
  // console.log(prioritiesQuery.data);
  // console.log(departmentsQuery.data);
  // console.log(employeesQuery.data);

  useEffect(() => {
    if (open) dispatch({ type: "RESET_TEMP" });
  }, [open]);

  if (prioritiesQuery.status !== "success") return null;
  if (departmentsQuery.status !== "success") return null;
  if (employeesQuery.status !== "success") return null;

  return (
    <div className="pt-10">
      <h1 className="text-2xl font-extrabold pb-10">დავალებების გვერდი</h1>
      <Settings open={open} setOpen={setOpen} />
      {open === "department" && (
        <FilterContainer type="department" data={departmentsQuery.data} />
      )}
      {open === "priority" && (
        <FilterContainer type="priority" data={prioritiesQuery.data} />
      )}
      {open === "employee" && (
        <FilterContainer type="employee" data={employeesQuery.data} />
      )}

      <SettingsFiltering />
      <TasksContainer />
    </div>
  );
}

export default MainPage;
