function TaskType({ department }) {
  const colorClass =
    {
      1: "bg-teal-400",
      2: "bg-sky-500",
      3: "bg-yellow-400",
      4: "bg-blue-600",
      5: "bg-pink-400",
      6: "bg-purple-500",
      7: "bg-amber-400",
      8: "bg-orange-400",
    }[department.id] || "bg-pink-400";

  const short_name = department.name
    .split(" ")
    .map((word) => `${word.slice(0, 3)}.`)
    .join(" ");

  return (
    <p
      className={`${colorClass} text-xs flex items-center text-white pl-3 pr-3 rounded-2xl`}
    >
      {short_name}
    </p>
  );
}

export default TaskType;
