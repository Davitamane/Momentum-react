import PriorityDropdown from "../features/TaskCreation/PriorityDropdown";
import Button from "../ui/Button";
import CalendarInput from "../ui/CalendarInput";
import Dropdown from "../ui/Dropdown";
import Validation from "../ui/Validation";
import Input from "../ui/Input";
import { useQuery } from "@tanstack/react-query";
import {
  getDepartments,
  getEmployees,
  getPriorities,
  getStatuses,
} from "../services/apiQuery";
import EmployeeDropdown from "../features/TaskCreation/EmployeeDropdown";
import { useState } from "react";
import DescriptionValidation from "../features/TaskCreation/DescriptionValidation";
import { useForm } from "react-hook-form";

// {
//   "name": "შექმენით test ფაილი",
//   "description": "აღწერეთ შესრულებული დავალება რიდმი ფაილით",
//   "due_date": "2026-01-21",
//   "status_id": 3,
//   "employee_id": 3427,
//   "priority_id": 2
// }

function TaskCreation() {
  const [departmentId, setDepartmentId] = useState("");

  const [statusId, setStatusId] = useState(1);
  const [priorityId, setPriorityId] = useState(2);
  const [employeeId, setEmployeeId] = useState("");

  // date
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const [selectedDate, setSelectedDate] = useState(tomorrow);
  // ========== //

  const statusesQuery = useQuery({
    queryKey: ["statuses"],
    queryFn: () => getStatuses(),
  });

  const prioritiesQuery = useQuery({
    queryKey: ["priorities"],
    queryFn: () => getPriorities(),
  });

  const departmentsQuery = useQuery({
    queryKey: ["departments"],
    queryFn: () => getDepartments(),
  });

  const employeesQuery = useQuery({
    queryKey: ["employees"],
    queryFn: () => getEmployees(),
    enabled: !!departmentId,
  });

  const { register, handleSubmit, watch } = useForm();

  if (statusesQuery.status !== "success") return null;
  if (prioritiesQuery.status !== "success") return null;
  if (departmentsQuery.status !== "success") return null;

  let sortedEmployees = [];
  if (employeesQuery.status === "success") {
    sortedEmployees = employeesQuery.data.filter(
      (employee) => employee.department_id === departmentId
    );
  }
  function onSubmit(data) {
    console.log(data);
    // console.log("HALO");
  }

  const title = watch("title") || "";
  const description = watch("description") || "";

  return (
    <>
      <h1 className="text-2xl font-extrabold pt-10 pb-5">
        შექმენით ახალი დავალება
      </h1>
      <form
        className="w-full h-fit bg-background p-16"
        onSubmit={handleSubmit(onSubmit)}
        // onSubmit={() => console.log("halo")}
      >
        <div className="grid grid-cols-2 w-full gap-x-32 gap-y-10">
          <Input text="სათაური">
            <input
              type="text"
              className="w-full text-sm focus:border-2 bg-white border border-gray-300 rounded-md resize-none :outline-none focus:border-2flex justify-between items-center px-4 py-3"
              {...register("title", {
                required: "This field is required",
                minLength: 2,
                maxLength: 255,
              })}
            />
            <Validation text={title} />
          </Input>
          <Input text="დეპარტამენტი">
            <Dropdown data={departmentsQuery.data} setState={setDepartmentId} />
          </Input>

          <Input text="აღწერა" required={false}>
            <textarea
              name="comment"
              className="w-full h-32 text-sm bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2 p-4"
              {...register("description", {
                validate: (value) => {
                  if (!value) return;
                  const words = value.trim().split(" ");
                  const letters = value.length;
                  if (words.length < 4) return "Must be at least 4 words";
                  if (letters > 255) return "Must be under 255 letters";
                  return true;
                },
              })}
            />
            <DescriptionValidation text={description} />
          </Input>
          <Input
            text="პასუხისმგებელი თანამშრომელი"
            customClassName={departmentId ? "" : "text-gray-400"}
          >
            {departmentId ? (
              <EmployeeDropdown
                data={sortedEmployees}
                departmentId={departmentId}
                setState={setEmployeeId}
              />
            ) : (
              <div className="flex justify-between items-center border border-gray-300 rounded-md px-4 py-3 cursor-not-allowed min-h-[48px]"></div>
            )}
          </Input>
          <div className="flex justify-between gap-8">
            <Input text="პრიორიტეტი">
              <PriorityDropdown
                data={prioritiesQuery.data}
                setState={setPriorityId}
              />
            </Input>

            <Input text="სტატუსი">
              <Dropdown
                data={statusesQuery.data}
                def={0}
                setState={setStatusId}
              />
            </Input>
          </div>
          <Input text="დედლაინი">
            <CalendarInput
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              tomorrow={tomorrow}
            />
          </Input>
        </div>

        <div className="w-full flex justify-end mt-16">
          <Button type="submit">დავალების შექმნა</Button>
        </div>
      </form>
    </>
  );
}

export default TaskCreation;
