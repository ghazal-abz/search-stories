import { useEffect, useRef } from "react";

const InputWithLabel = ({
  id,
  label,
  value,
  onInputChange,
  type = "text",
  isFocused,
}) => {
  const handleChange = (event) => {
    onInputChange(event);
  };

  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused])

  return (
    <>
      <label htmlFor={id} className="mx-2">{label}</label>
      <input
        onChange={handleChange}
        type={type}
        id={id}
        value={value}
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;
