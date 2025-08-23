import { useForm, Controller } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PriorityDropdown from "../features/TaskCreation/PriorityDropdown";
import EmployeeDropdown from "../features/TaskCreation/EmployeeDropdown";
import Button from "../ui/Button";
import CalendarInput from "../ui/CalendarInput";
import Dropdown from "../ui/Dropdown";
import Input from "../ui/Input";
import Validation from "../ui/Validation";
import DescriptionValidation from "../features/TaskCreation/DescriptionValidation";
import {
  getDepartments,
  getEmployees,
  getPriorities,
  getStatuses,
  postTask,
} from "../services/apiQuery";
import { toast } from "react-toastify";

function TaskCreation() {
  const { register, handleSubmit, watch, control } = useForm({
    defaultValues: {
      title: "",
      description: "",
      departmentId: "",
      employeeId: "",
      priorityId: 2,
      statusId: 1,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: postTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["employees"]);
      toast.success("Successfully uploaded!");
    },
    onError: (error) => {
      console.error("failed to send", error);
    },
  });

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      dueDate: new Date(data.dueDate).toISOString().split("T")[0], // "2025-12-31"
    };

    console.log(formattedData);
    mutate(formattedData);
  };

  const statusesQuery = useQuery({
    queryKey: ["statuses"],
    queryFn: getStatuses,
  });
  const prioritiesQuery = useQuery({
    queryKey: ["priorities"],
    queryFn: getPriorities,
  });
  const departmentsQuery = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
  });
  const employeesQuery = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
    enabled: watch("departmentId") !== "",
  });

  if (
    statusesQuery.isLoading ||
    prioritiesQuery.isLoading ||
    departmentsQuery.isLoading
  )
    return <div>Loading...</div>;
  if (
    statusesQuery.isError ||
    prioritiesQuery.isError ||
    departmentsQuery.isError
  )
    return <div>Error loading data</div>;

  const title = watch("title") || "";
  const description = watch("description") || "";
  const selectedDepartmentId = watch("departmentId");

  const sortedEmployees =
    employeesQuery.isSuccess && selectedDepartmentId
      ? employeesQuery.data.filter(
          (e) => e.department_id === selectedDepartmentId
        )
      : [];

  return (
    <>
      <h1 className="text-2xl font-extrabold pt-10 pb-5">
        შექმენით ახალი დავალება
      </h1>

      <form
        className="w-full h-fit bg-background p-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 w-full gap-x-32 gap-y-10">
          <Input text="სათაური">
            <input
              type="text"
              className="w-full text-sm bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2 px-4 py-3"
              {...register("title", {
                required: "This field is required",
                minLength: 2,
                maxLength: 255,
              })}
            />
            <Validation text={title} />
          </Input>

          <Input text="დეპარტამენტი">
            <Controller
              name="departmentId"
              control={control}
              render={({ field }) => (
                <Dropdown
                  data={departmentsQuery.data}
                  setState={field.onChange}
                />
              )}
            />
          </Input>

          <Input text="აღწერა" required={false}>
            <textarea
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
            customClassName={selectedDepartmentId ? "" : "text-gray-400"}
          >
            {selectedDepartmentId ? (
              <Controller
                name="employeeId"
                control={control}
                render={({ field }) => (
                  <EmployeeDropdown
                    data={sortedEmployees}
                    departmentId={selectedDepartmentId}
                    setState={field.onChange}
                  />
                )}
              />
            ) : (
              <div className="flex justify-between items-center border border-gray-300 rounded-md px-4 py-3 cursor-not-allowed min-h-[48px]"></div>
            )}
          </Input>

          <div className="flex justify-between gap-8">
            <Input text="პრიორიტეტი">
              <Controller
                name="priorityId"
                control={control}
                render={({ field }) => (
                  <PriorityDropdown
                    data={prioritiesQuery.data}
                    setState={field.onChange}
                  />
                )}
              />
            </Input>

            <Input text="სტატუსი">
              <Controller
                name="statusId"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    data={statusesQuery.data}
                    def={0}
                    setState={field.onChange}
                  />
                )}
              />
            </Input>
          </div>

          <Input text="დედლაინი">
            <Controller
              name="dueDate"
              control={control}
              render={({ field }) => (
                <CalendarInput
                  selectedDate={field.value}
                  setSelectedDate={field.onChange}
                  tomorrow={new Date()}
                />
              )}
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
