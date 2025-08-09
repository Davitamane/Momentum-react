import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import SettingsButton from "./SettingsButton";

function Settings({open, setOpen}) {

  function handleOpen(name) {
    name === open ? setOpen("") : setOpen(name);
  }

  return (
    <div className="gap-10 border border-gray-300 rounded-xl inline-flex pt-2 pb-2 pl-6  pr-6">
      <SettingsButton
        open={open === "department" }
        onClick={() => handleOpen("department")}
      >
        <p className="text-lg">დეპარტანემნტი</p>
        {open === "department" ? (
          <MdKeyboardArrowUp className="size-7" />
        ) : (
          <MdKeyboardArrowDown className="size-7" />
        )}
      </SettingsButton>
      <SettingsButton
        open={open === "priority" }
        onClick={() => handleOpen("priority")}
      >
        <p className="text-lg">პრიორიტეტი</p>
        {open === "priority" ? (
          <MdKeyboardArrowUp className="size-7" />
        ) : (
          <MdKeyboardArrowDown className="size-7" />
        )}
      </SettingsButton>
      <SettingsButton
        open={open === "employee" }
        onClick={() => handleOpen("employee")}
      >
        <p className="text-lg">თანამშრომელი</p>
        {open === "employee" ? (
          <MdKeyboardArrowUp className="size-7" />
        ) : (
          <MdKeyboardArrowDown className="size-7" />
        )}
      </SettingsButton>
    </div>
  );
}

export default Settings;
