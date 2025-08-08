import TasksContainer from "../features/MainPage/TasksContainer";
import Settings from "../features/MainPage/Settings";
import SettingsFiltering from "../features/MainPage/SettingsFiltering";

function MainPage() {
  return (
    <div className="pt-10">
      <h1 className="text-2xl font-extrabold pb-10">დავალებების გვერდი</h1>
      <Settings />
      <SettingsFiltering />
      <TasksContainer />
    </div>
  );
}

export default MainPage;
