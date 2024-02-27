import React, { useState } from "react";

const CheckInput = ({
  className,
  labelClass,
  id,
  label,
  value,
  handleValue,
  placeholder,
  containerClass,
  name
}) => {
  const [input, setInput] = useState(value);

  function handleInput(e) {}

  return (
    <div className={`relative flex items-center p-1  ${containerClass}`}>
      <input
        id={id}
        type="checkbox"
        value={input}
        onChange={handleInput}
        name={name}
        className={`  ${className}`}
      />
      <label className={`text-sm px-1 text-slate-600 ${labelClass}`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

const CheckGroup = ({ children,label,labelClass}) => {

  return <div className="flex flex-col ">
    <label className={`text-sm  text-slate-600 ${labelClass}`} >
        {label}
      </label>
    {children}</div>;
};

CheckInput.CheckGroup = CheckGroup;

export default CheckInput;
