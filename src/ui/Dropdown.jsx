import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Dropdown({ data, def }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    def !== undefined && data[def] ? data[def] : ""
  );

  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

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
      disabled={true}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center border border-gray-300 rounded-md px-4 py-3 cursor-pointer"
      >
        <div className="flex items-center gap-2">{selected.name}</div>
        {isOpen ? (
          <MdKeyboardArrowUp className="w-5 h-5" />
        ) : (
          <MdKeyboardArrowDown className="w-5 h-5" />
        )}
      </div>

      {isOpen && (
        <div className="absolute z-10 bg-white border border-purple-300 rounded-md w-full shadow-md">
          {data.map((option) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option)}
              className="px-4 py-3 flex items-center gap-2 hover:bg-purple-50 cursor-pointer"
            >
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
