import clsx from "clsx";

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
  disabled,
}: IButton) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || error}
      className={clsx(
        "px-4 py-2 text-white rounded text-base font-medium",
        "bg-gradient-to-r from-[#30ebff] to-[#2563eb]",
        {
          "opacity-50 cursor-not-allowed": disabled || error,
          "hover:opacity-60 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:#2563eb focus:ring-offset-2":
            !disabled && !error,
        },
        className
      )}
    >
      {text}
    </button>
  );
}

export default Button;
