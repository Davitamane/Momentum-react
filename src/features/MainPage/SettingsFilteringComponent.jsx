import { IoMdClose } from "react-icons/io";

function SettingsFilteringComponent({ children }) {
  return (
    <div className="flex gap-1 text-gray-400 font-thin border-1 p-1 pl-3 pr-3 rounded-2xl border-gray-400">
      <p>{children}</p>
      <button>
        <IoMdClose />
      </button>
    </div>
  );
}

export default SettingsFilteringComponent;
