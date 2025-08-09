import TasksContainer from "../features/MainPage/TasksContainer";
import Settings from "../features/MainPage/Settings";
import SettingsFiltering from "../features/MainPage/SettingsFiltering";
import FilterContainer from "../features/MainPage/FilterContainer";
import { useContext } from "react";
import { MainPageContext } from "../context/MainPageContext";

function MainPage() {
  const { open, setOpen } = useContext(MainPageContext);
  return (
    <div className="pt-10">
      <h1 className="text-2xl font-extrabold pb-10">დავალებების გვერდი</h1>
      <Settings open={open} setOpen={setOpen} />
      {open === "department" && <FilterContainer test={"department"} />}
      {open === "priority" && <FilterContainer test={"priority"} />}
      {open === "employee" && <FilterContainer test={"employee"} />}
      <SettingsFiltering />
      <TasksContainer />
    </div>
  );
}

export default MainPage;
