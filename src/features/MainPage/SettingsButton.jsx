function SettingsButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-1.5">
      {children}
    </button>
  );
}

export default SettingsButton;
