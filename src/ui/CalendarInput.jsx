import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";

export default function CalendarInput({
  selectedDate,
  setSelectedDate,
  tomorrow,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(true)}
      className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-1/2 bg-white cursor-pointer"
    >
      <FiCalendar className="text-gray-500 mr-2" size={20} />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          setIsOpen(false);
        }}
        dateFormat="dd/MM/yyyy"
        minDate={tomorrow}
        open={isOpen}
        onClickOutside={() => setIsOpen(false)}
        showPopperArrow={false}
        popperPlacement="top-start"
        className="w-full focus:outline-none cursor-pointer bg-transparent"
      />
    </div>
  );
}
