function TaskCreation() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-2">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          setOpen(false);
        }}
        open={open}
        onClickOutside={() => setOpen(false)}
        onSelect={() => setOpen(false)}
        className="border p-2 rounded-md"
        placeholderText="Pick a date"
        popperPlacement="bottom-start"
      />
      <FaCalendarAlt
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
    </div>
  );
}

export default TaskCreation;
