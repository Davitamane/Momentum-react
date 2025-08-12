
function TaskImportance({ priority }) {
  const colorClass =
    {
      1: "text-green-600",
      2: "text-yellow-500",
      3: "text-red-600",
    }[priority.id] || "bg-gray-200";

  return (
    <div
      className={`text-xs flex items-center  border pl-0.5 pr-2 pb-0.5 pt-0.5 rounded-md ${colorClass}`}
    >
      <img src={priority.icon} className="px-1" />
      {priority.name}
    </div>
  );
}

export default TaskImportance;
