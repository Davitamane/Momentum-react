import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CustomCalendar() {
  const [startDate, setStartDate] = useState(null);
  const [tempDate, setTempDate] = useState(null); // For OK/Cancel behavior
  const [open, setOpen] = useState(false);

  const handleCancel = () => {
    setTempDate(startDate); // Revert to original
    setOpen(false);
  };

  const handleOk = () => {
    setStartDate(tempDate);
    setOpen(false);
  };

  return (
    <div className="relative w-64">
      <input
        readOnly
        value={startDate ? startDate.toLocaleDateString() : ""}
        placeholder="DD/MM/YYYY"
        onClick={() => setOpen(true)}
        className="border border-purple-500 rounded p-2 w-full cursor-pointer"
      />
      {open && (
        <div className="absolute z-50 bg-white border border-gray-300 rounded shadow-lg mt-1 p-4 w-full">
          <DatePicker
            inline
            selected={tempDate}
            onChange={(date) => setTempDate(date)}
            calendarClassName="custom-calendar"
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-purple-600">
                  {date.toLocaleString("ka-GE", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    className="text-purple-600"
                  >
                    ↑
                  </button>
                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    className="text-purple-600"
                  >
                    ↓
                  </button>
                </div>
              </div>
            )}
            dayClassName={(date) =>
              date.getDate() === (tempDate?.getDate() || -1)
                ? "bg-purple-600 text-white rounded"
                : ""
            }
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={handleCancel}
              className="text-purple-600 font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleOk}
              className="text-purple-600 font-semibold"
              disabled={!tempDate}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomCalendar;
