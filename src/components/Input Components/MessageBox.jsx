import React,{useState} from "react";

const MessageBox = ({
  className,
  labelClass,
  id,
  label,
  value,
  handleValue,
  type,
  placeholder,
}) => {
  const [input, setInput] = useState(value);

  function handleInput(e) {
    setInput(e.target.value);

    handleValue(e.target.value);
  }

  return (
    <div className="relative flex flex-col min-w-[190px]">
      <label
        className={`text-sm px-1 py-1 text-slate-600 ${labelClass}`}
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        type={type}
        id={id}
        value={input}
        placeholder={placeholder}
        onChange={handleInput}
        className={` text-slate-700 w-full px-1 py-1 border outline-none resize-none focus:border-blue-400 focus:shadow-blue-300 focus:shadow-even rounded-md ${className}`}
      ></textarea>
    </div>
  );
};

export default MessageBox;
