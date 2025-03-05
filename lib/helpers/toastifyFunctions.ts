import { Slide, toast } from "react-toastify";

export const error = (text: string) =>
  toast.error(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    className: "text-red-600 w-[350px]",
    transition: Slide,
    toastId: "error-app",
  });

export const success = (text: string) =>
  toast.success(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    className: "text-green-600 w-[350px]",
    transition: Slide,
    toastId: "success-app",
  });
