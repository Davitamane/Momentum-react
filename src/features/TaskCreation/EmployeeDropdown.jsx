import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

function EmployeeDropdown({ data, departmentId, setState }) {
  console.log(data);
  const { setIsModalOpen } = useContext(ModalContext);
  const [selected, setSelected] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    setState(option.id)

  };

  useEffect(() => {
    setSelected(null);
  }, [departmentId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log(event.target);

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative w-full text-sm font-medium bg-white"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center border border-gray-300 rounded-md px-4 cursor-pointer h-12"
      >
        <div className="flex items-center gap-2">
          {selected ? (
            <>
              <img
                className="w-8 h-8 rounded-full object-cover object-center"
                src={selected.avatar}
                alt={`${selected.name} ${selected.surname}`}
              />
              {selected.name} {selected.surname}
            </>
          ) : (
            <span className="text-gray-400"></span>
          )}
        </div>
        {isOpen ? (
          <MdKeyboardArrowUp className="w-5 h-5" />
        ) : (
          <MdKeyboardArrowDown className="w-5 h-5" />
        )}
      </div>

      {isOpen && (
        <div className="absolute z-10 bg-white border border-purple-300 rounded-md w-full shadow-md">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-3 flex items-center gap-2 hover:bg-purple-50 cursor-pointer w-full"
          >
            <span className="flex items-center gap-2 text-main">
              <CiCirclePlus className="size-6" />
              დაამატე ახალი თანამშრომელი
            </span>
          </button>

          {data.map((option) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option)}
              className="px-4 py-3 flex items-center gap-2 hover:bg-purple-50 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <img
                  src={option.avatar}
                  className="w-8 h-8 rounded-full object-cover object-center"
                />
                {option.name} {option.surname}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmployeeDropdown;
