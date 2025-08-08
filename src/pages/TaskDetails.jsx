import TaskDetailsStatuses from "../features/TaskDetails/TaskDetailsStatuses";
import TaskImportance from "../ui/TaskImportance";
import TaskType from "../ui/TaskType";
import { PiClock } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import Dropdown from "../features/TaskDetails/Dropdown";

function TaskDetails() {
  return (
    <div className="pt-10 w-full flex gap-20">
      {/* Container 1 */}
      <div className="w-1/2 flex flex-col gap-16">
        {/* First half */}
        <div>
          <div className="flex gap-4">
            <TaskImportance type="big" children="დაბალი" />
            <TaskType type="big" children="დიზაინი" />
          </div>
          <h1 className="pt-1.5 pb-4.5 font-bold text-2xl">
            Redberry-ს საიტის ლენდინგის დიზაინი
          </h1>
          <p className="text-sm">
            მიზანია რომ შეიქმნას თანამედროვე, სუფთა და ფუნქციონალური დიზაინი,
            რომელიც უზრუნველყოფს მარტივ ნავიგაციას და მკაფიო ინფორმაციის
            გადაცემას. დიზაინი უნდა იყოს ადაპტირებადი (responsive), გამორჩეული
            ვიზუალით, მინიმალისტური სტილით და ნათელი ტიპოგრაფიით.
          </p>
        </div>
        {/* Second half */}
        <div>
          <h1 className="pt-1.5 pb-4.5 font-bold text-2xl">
            დავალების დეტალები
          </h1>
          <div className="grid grid-rows-3 grid-cols-2 gap-x-4 gap-y-10">
            <TaskDetailsStatuses>
              <PiClock className="w-7 h-7" />
              <p>სტატუსი</p>
            </TaskDetailsStatuses>
            <Dropdown />
            <TaskDetailsStatuses>
              <GoPerson className="w-7 h-7" />
              <p>თანამშრომელი</p>
            </TaskDetailsStatuses>
            <div>ოთხი</div>
            <TaskDetailsStatuses>
              <IoCalendarClearOutline className="w-7 h-7" />
              <p>დავალების ვადა</p>
            </TaskDetailsStatuses>
            <div>ექვსი</div>
          </div>
        </div>
      </div>

      {/* Container 2 */}
      <div className="w-1/2">second part</div>
    </div>
  );
}

export default TaskDetails;
