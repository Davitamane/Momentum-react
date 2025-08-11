function Validation({ customClassName }) {
  return (
    <div className={`text-xs text-gray-400 ${customClassName}`}>
      <p>მინიმუმ 2 სიმბოლო</p>
      <p>მაქსიმუმ 255 სიმბოლო</p>
    </div>
  );
}

export default Validation;
