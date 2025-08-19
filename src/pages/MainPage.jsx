import TasksContainer from "../features/MainPage/TasksContainer";
import Settings from "../features/MainPage/Settings";
import SettingsFiltering from "../features/MainPage/SettingsFiltering";
import FilterContainer from "../features/MainPage/FilterContainer";
import { useContext } from "react";
import { MainPageContext } from "../context/MainPageContext";
import { useQuery } from "@tanstack/react-query";
import {
  getDepartments,
  getEmployees,
  getPriorities,
} from "../services/apiQuery";

function MainPage() {
  const { open, setOpen } = useContext(MainPageContext);

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
  console.log(prioritiesQuery.data);
  console.log(departmentsQuery.data);
  console.log(employeesQuery.data);
  

  return (
    <div className="pt-10">
      <h1 className="text-2xl font-extrabold pb-10">დავალებების გვერდი</h1>
      <Settings open={open} setOpen={setOpen} />
      {open === "department" && <FilterContainer data={departmentsQuery} />}
      {open === "priority" && <FilterContainer data={prioritiesQuery} />}
      {open === "employee" && <FilterContainer data={employeesQuery} />}
      <SettingsFiltering />
      <TasksContainer />
    </div>
  );
}

export default MainPage;
