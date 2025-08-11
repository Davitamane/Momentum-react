function Input({ children, text, customClassName }) {
  return (
    <div className={`w-full ${customClassName}`}>
      <p>
        {text}
        <span>*</span>
      </p>
      {children}
    </div>
  );
}

export default Input;
