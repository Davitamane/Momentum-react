import { useContext } from "react";
import SettingsFilteringComponent from "./SettingsFilteringComponent";
import { MainPageContext } from "../../context/MainPageContext";
import { useQueryClient } from "@tanstack/react-query";

function SettingsFiltering() {
  const { filters, dispatch } = useContext(MainPageContext);
  const queryClient = useQueryClient();

  const depData = queryClient.getQueryData(["departments"]) || [];
  const prioData = queryClient.getQueryData(["priorities"]) || [];
  const employeeData = queryClient.getQueryData(["employees"]) || [];

  const filteredDep =
    filters.final.department.length > 0
      ? depData.filter((dep) => filters.final.department.includes(dep.id))
      : [];

  const filteredPrio =
    filters.final.priority.length > 0
      ? prioData.filter((prio) => filters.final.priority.includes(prio.id))
      : [];

  const employee = filters.final.employee
    ? employeeData.find((e) => filters.final.employee === e.id)
    : null;
  // console.log(employee);

  return (
    <div className="flex gap-3 pt-6 items-center">
      {filteredDep.map((dep) => (
        <SettingsFilteringComponent key={dep.id} id={dep.id} type="department">
          {dep.name}
        </SettingsFilteringComponent>
      ))}
      {filteredPrio.map((prio) => (
        <SettingsFilteringComponent key={prio.id} type="priority" id={prio.id}>
          {prio.name}
        </SettingsFilteringComponent>
      ))}

      {employee && (
        <SettingsFilteringComponent type="employee" id={employee.id}>
          {employee.name} {employee.surname}
        </SettingsFilteringComponent>
      )}

      {(filters.final.department.length > 0 ||
        filters.final.priority.length > 0 ||
        filters.final.employee) && (
        <button
          className="flex gap-1 text-gray-400 font-thin"
          onClick={() => dispatch({ type: "empty" })}
        >
          გასუფთავება
        </button>
      )}
    </div>
  );
}

export default SettingsFiltering;
