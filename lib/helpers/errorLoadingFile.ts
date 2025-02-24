import { Slide, toast } from "react-toastify";

export const errorLoadingFile = () =>
  toast.error("Вы не заполнили файл полностью!", {
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
    toastId: "error-loading-file",
  });
