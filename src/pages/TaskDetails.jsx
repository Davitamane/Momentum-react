import TaskDetailsStatuses from "../features/TaskDetails/TaskDetailsStatuses";
import TaskImportance from "../ui/TaskImportance";
import TaskType from "../ui/TaskType";
import { PiClock } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import Dropdown from "../ui/Dropdown";
import CommentContainer from "../features/TaskDetails/CommentContainer";
import { useParams } from "react-router-dom";
import { getSingleTask, getStatuses, putStatus } from "../services/apiQuery";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { ka } from "date-fns/locale";
import { useState } from "react";
import { toast } from "react-toastify";

function TaskDetails() {
  const [statusId, setStatusId] = useState(null);

  const { id } = useParams();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data) => putStatus(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      toast.success("Successfully uploaded!");
    },
    onError: (error) => {
      console.error("failed to send", error);
      toast.error(error);
    },
  });

  const taskQuery = useQuery({
    queryKey: ["task", id],
    queryFn: () => getSingleTask(id),
  });

  const statusesQuery = useQuery({
    queryKey: ["statuses"],
    queryFn: () => getStatuses(),
  });

  if (taskQuery.status !== "success") return null;

  const {
    priority,
    department,
    name: title,
    description,
    employee: {
      avatar,
      department: { name: depName },
      name,
      surname,
    },
    due_date,
    status,
  } = taskQuery.data;

  const weekday = format(new Date(due_date), "EEE", { locale: ka });
  const formattedDate = format(new Date(due_date), "dd/MM/yyyy");
  const fullDateString = `${weekday} - ${formattedDate}`;

  return (
    <div className="pt-10 w-full flex gap-20">
      {/* Container 1 */}
      <div className="w-1/2 flex flex-col gap-16">
        {/* First half */}
        <div>
          <div className="flex gap-4">
            <TaskImportance type="big" priority={priority} />
            <TaskType department={department} />
          </div>
          <h1 className="pt-2.5 pb-4.5 font-bold text-2xl">{title}</h1>
          <p className="text-sm">{description}</p>
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
            {statusesQuery.data && (
              <Dropdown
                data={statusesQuery.data}
                def={status.id - 1}
                setState={(newStatusId) => {
                  setStatusId(newStatusId);
                  mutate({
                    status_id: newStatusId,
                  });
                }}
              />
            )}

            <TaskDetailsStatuses>
              <GoPerson className="w-7 h-7" />
              <p>თანამშრომელი</p>
            </TaskDetailsStatuses>
            <div className="inline-flex gap-2 items-center">
              <img
                src={avatar}
                alt="test"
                className="w-8 h-8 rounded-full object-cover object-center"
              />
              <div className="flex flex-col">
                <p className="text-xs text-gray-500">{depName}</p>
                <h3>
                  {name} {surname}
                </h3>
              </div>
            </div>
            <TaskDetailsStatuses>
              <IoCalendarClearOutline className="w-7 h-7" />
              <p>დავალების ვადა</p>
            </TaskDetailsStatuses>
            <div className="flex items-center">{fullDateString}</div>
          </div>
        </div>
      </div>

      {/* Container 2 */}
      <CommentContainer taskId={id} />
    </div>
  );
}

export default TaskDetails;
