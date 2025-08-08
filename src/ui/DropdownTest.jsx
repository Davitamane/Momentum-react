// PriorityDropdown.jsx
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaCheck, FaExclamation, FaArrowUp } from "react-icons/fa";

const options = [
  { label: "დაბალი", color: "text-green-600", icon: <FaCheck /> },
  { label: "საშუალო", color: "text-yellow-500", icon: <FaExclamation /> },
  { label: "მაღალი", color: "text-red-500", icon: <FaArrowUp /> },
];

function DropdownTest() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[1]); // Default: საშუალო

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative w-64 text-sm font-medium">
        <label className="block mb-1 text-purple-600">
          პრიორიტეტი<span className="text-red-500">*</span>
        </label>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center border border-purple-500 rounded-md px-4 py-2 cursor-pointer"
        >
          <div className={`flex items-center gap-2 ${selected.color}`}>
            {selected.icon}
            {selected.label}
          </div>
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-1 bg-white border border-purple-300 rounded-md w-full shadow-md">
            {options.map((option) => (
              <div
                key={option.label}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 flex items-center gap-2 hover:bg-purple-50 cursor-pointer"
              >
                <span className={option.color}>{option.icon}</span>
                <span>{option.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>halo</div>
    </>
  );
}

export default DropdownTest;
