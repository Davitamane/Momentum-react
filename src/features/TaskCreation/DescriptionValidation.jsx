function DescriptionValidation({ customClassName, text = "" }) {
  const textLength = text.length;

  const minWords = text.split(" ").length > 3;

  return (
    <div className={`text-xs text-gray-400 ${customClassName}`}>
      <p
        className={
          textLength === 0
            ? "text-gray-400"
            : minWords >= 2
            ? "text-green-600"
            : "text-red-600"
        }
      >
        მინიმუმ 4 სიტყვა
      </p>

      <p
        className={
          textLength === 0
            ? "text-gray-400"
            : textLength <= 255
            ? "text-green-600"
            : "text-red-600"
        }
      >
        მაქსიმუმ 255 სიმბოლო
      </p>
    </div>
  );
}

export default DescriptionValidation;
