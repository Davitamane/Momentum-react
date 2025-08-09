function SettingsButton({ children, onClick, open }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 ${open ? "text-main" : ""}`}
    >
      {children}
    </button>
  );
}

export default SettingsButton;
