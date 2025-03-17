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
}: IButton) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={error}
      className={clsx(
        "px-4 py-2 bg-blue-500 text-white rounded", // Базовые классы
        {
          "opacity-50 cursor-not-allowed": error, // Условные классы при error === true
          "hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2":
            !error, // Условные классы при error === false
        },
        className // Дополнительные классы, переданные через пропс
      )}
    >
      {text}
    </button>
  );
}

export default Button;
