import PriorityDropdown from "../features/TaskCreation/PriorityDropdown";
import Button from "../ui/Button";
import CalendarInput from "../ui/CalendarInput";
import Dropdown from "../ui/Dropdown";
import Validation from "../ui/Validation";

function TaskCreation() {
  return (
    <>
      <h1 className="text-2xl font-extrabold pt-10 pb-5">
        შექმენით ახალი დავალება
      </h1>
      <div className="w-full h-fit bg-background p-16">
        <div className="grid grid-cols-2 w-full gap-x-32 gap-y-10">
          <div className="h-fit">
            <p>
              აღწერა<span>*</span>
            </p>
            <input
              type="text"
              className="w-full text-sm bg-white border border-outline rounded-md resize-none focus:outline-none focus:border-2 p-2.5"
            />
            <Validation />
          </div>

          <div className="w-full">
            <p>
              დეპარტამენტი<span>*</span>
            </p>
              <Dropdown />
          </div>

          <div>
            <p>სათაური</p>
            <textarea
              name="comment"
              className="w-full h-32 text-sm bg-white border border-outline rounded-md resize-none focus:outline-none focus:border-2 p-4"
            ></textarea>
            <Validation />
          </div>

          <div className="w-full">
            <p>
              პასუხისმგებელი თანამშრომელი(აქ მოდალის გაღების ღილაკი უნდა
              ჩავამატო)<span>*</span>
            </p>
              <Dropdown />
          </div>

          <div className="flex justify-between gap-8">
            <div className="w-full">
              <p>
                პრიორიტეტი<span>*</span>
              </p>
              <PriorityDropdown />
            </div>
            <div className="w-full">
              <p>
                სტატუსი<span>*</span>
              </p>
                <Dropdown />
            </div>
          </div>
          <div>
            <CalendarInput />
          </div>
        </div>

        <Button>დავალების შექმნა</Button>
      </div>
    </>
  );
}

export default TaskCreation;
