import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  error?: boolean;
}

function Button({
  type = "button",
  text,
  onClick,
  error = false,
  className,
}: IButton) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={error}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${
        error
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      } ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
