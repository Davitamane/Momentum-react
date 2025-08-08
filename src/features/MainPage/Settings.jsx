import { MdKeyboardArrowDown } from "react-icons/md";
import SettingsButton from "./SettingsButton";

function Settings() {
  return (
    <div className="gap-10 border-1 border-gray-300 rounded-xl inline-flex pt-2 pb-2 pl-6  pr-6">
      <SettingsButton>
        <p className="text-lg">დეპარტანემნტი</p>
        <MdKeyboardArrowDown className="size-7" />
      </SettingsButton>
      <SettingsButton>
        <p className="text-lg">პრიორიტეტი</p>
        <MdKeyboardArrowDown className="size-7" />
      </SettingsButton>
      <SettingsButton>
        <p className="text-lg">თანამშრომელი</p>
        <MdKeyboardArrowDown className="size-7" />
      </SettingsButton>
    </div>
  );
}

export default Settings;
