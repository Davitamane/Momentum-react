import { FaRegCommentAlt } from "react-icons/fa";
import image from "../../assets/test.jpeg";
import TaskType from "../../ui/TaskType";
import TaskImportance from "../../ui/TaskImportance";

function Task() {
  return (
    <div className="border border-yellow p-4 rounded-2xl flex flex-col gap-4">
      <div className="flex justify-between w-full">
        <div className="gap-2 flex">
          <TaskImportance children={"დაბალი"} />
          <TaskType children={"დიზაინი"} />
        </div>
        <p className="text-xs flex items-center text-gray-500">22 იანვ, 2022</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-base">
          Redberry-ს საიტის ლენდინგის დიზაინი
        </h2>
        <p className="text-sm text-gray-800">
          შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს,
          ნავიგაციას.
        </p>
      </div>
      <div className="flex w-full justify-between">
        <img src={image} alt="test" className="w-8 h-8 rounded-full" />
        <div className="flex items-center gap-1">
          <FaRegCommentAlt className="size-4  text-gray-500" />
          <p className=" flex items-center text-gray-500">8</p>
        </div>
      </div>
    </div>
  );
}

export default Task;
