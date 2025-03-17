import React, { InputHTMLAttributes } from "react";

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function InputForm(props: IInputForm) {
  const {
    type = "text",
    name,
    placeholder,
    value,
    onChange,
    className,
  } = props;

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className={className}
    />
  );
}

export default InputForm;
