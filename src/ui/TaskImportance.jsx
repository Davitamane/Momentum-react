import { MdKeyboardArrowDown } from "react-icons/md";

function TaskImportance({ children }) {
  return (
    <div className="text-xs flex items-center text-green-600 border pl-0.5 pr-2 pb-0.5 pt-0.5 rounded-md ">
      <MdKeyboardArrowDown className="size-5" />
      {children}
    </div>
  );
}

export default TaskImportance;
