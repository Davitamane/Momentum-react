import { useContext } from "react";
import PriorityDropdown from "../features/TaskCreation/PriorityDropdown";
import Button from "../ui/Button";
import CalendarInput from "../ui/CalendarInput";
import Dropdown from "../ui/Dropdown";
import Validation from "../ui/Validation";
import { ModalContext } from "../context/ModalContext";
import Input from "../ui/Input";

function TaskCreation() {
  const { setIsModalOpen } = useContext(ModalContext);
  return (
    <>
      <h1 className="text-2xl font-extrabold pt-10 pb-5">
        შექმენით ახალი დავალება
      </h1>
      <div className="w-full h-fit bg-background p-16">
        <div className="grid grid-cols-2 w-full gap-x-32 gap-y-10">
          <Input text="სათაური">
            <input
              type="text"
              className="w-full text-sm focus:border-2 bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2flex justify-between items-center px-4 py-3"
            />
            <Validation />
          </Input>
          <Input text="დეპარტამენტი">
            <Dropdown />
          </Input>
          
          <Input text="სათაური">
            <textarea
              name="comment"
              className="w-full h-32 text-sm bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2 p-4"
            />
            <Validation />
          </Input>
          <Input text="პასუხისმგებელი თანამშრომელი">
            <Dropdown />
          </Input>
          <div className="flex justify-between gap-8">
            <Input text="პრიორიტეტი">
              <PriorityDropdown />
            </Input>

            <Input text="სტატუსი">
              <Dropdown />
            </Input>
          </div>
          <Input text="სტატუსი">
            <CalendarInput />
          </Input>
        </div>

        <div className="w-full flex justify-end mt-16">
          <Button>დავალების შექმნა</Button>
        </div>
        <button onClick={() => setIsModalOpen(true)}>test button</button>
      </div>
    </>
  );
}

export default TaskCreation;
