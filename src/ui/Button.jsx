const baseStyles =
  "px-4 py-1.5 font-thin gap-2 cursor-pointer relative flex items-center justify-center";

const typeStyles = {
  primary: "bg-main text-white border-2 border-main rounded-md",
  secondary: "bg-white border border-main rounded-md border-2",
};

function Button({ children, onClick, type = "primary" }) {
  const style = `${baseStyles} ${typeStyles[type]}`;

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
