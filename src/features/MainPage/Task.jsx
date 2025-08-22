import { FaRegCommentAlt } from "react-icons/fa";
import TaskType from "../../ui/TaskType";
import TaskImportance from "../../ui/TaskImportance";
import { format } from "date-fns";
import { ka } from "date-fns/locale";
import { Link } from "react-router-dom";

function Task({ data }) {
  // console.log(data);
  const {
    name: title,
    employee: { avatar },
    description,
    priority,
    department,
    due_date,
    total_comments,
  } = data;
  // console.log(priority);
  const formattedDate = format(new Date(due_date), "d MMM yyyy", {
    locale: ka,
  });

  // console.log(description.length);
  const colorClass =
    {
      1: "border-teal-400",
      2: "border-sky-500",
      3: "border-yellow-400",
      4: "border-blue-600",
      5: "border-pink-400",
      6: "border-purple-500",
      7: "border-amber-400",
      8: "border-orange-400",
    }[department.id] || "bg-pink-400";

  return (
    <Link to={`/details/${data.id}`}>
      <div
        className={`border-2 ${colorClass} p-4 rounded-2xl flex flex-col gap-4`}
      >
        <div className="flex justify-between w-full">
          <div className="gap-2 flex">
            <TaskImportance priority={priority} />
            <TaskType department={department} />
          </div>
          <p className="text-xs flex items-center text-gray-500">
            {formattedDate}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-base">{title}</h2>
          <p className="text-sm text-gray-800 h-18  ">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        </div>
        <div className="flex w-full justify-between">
          <img
            src={avatar}
            alt="test"
            className="w-8 h-8 rounded-full object-cover object-center"
          />
          <div className="flex items-center gap-1">
            <FaRegCommentAlt className="size-4  text-gray-500" />
            <p className=" flex items-center text-gray-500">{total_comments}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Task;
