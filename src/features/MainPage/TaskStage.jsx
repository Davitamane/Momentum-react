function TaskStage({ children, id }) {
  const colorClass =
    {
      1: "bg-yellow",
      2: "bg-orange",
      3: "bg-pink",
      4: "bg-blue",
    }[id] || "bg-gray-200";
  return (
    <div
      className={`${colorClass} text-white text-xl flex items-center justify-center p-4 rounded-2xl mb-6`}
    >
      {children}
    </div>
  );
}

export default TaskStage;
