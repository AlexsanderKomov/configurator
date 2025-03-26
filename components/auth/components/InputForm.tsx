import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: FieldError | string;
}

const InputForm = forwardRef<HTMLInputElement, IInputForm>(
  ({ type = "text", className = "", error, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          ref={ref}
          {...props}
          className={`w-full p-2 border rounded${
            error
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : ""
          }${className}`}
        />
        {error && (
          <p className="text-red-500 text-sm mt-1">
            {typeof error === "string" ? error : error.message}
          </p>
        )}
      </div>
    );
  }
);

InputForm.displayName = "InputForm";

export default InputForm;
