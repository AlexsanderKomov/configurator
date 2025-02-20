import { ToastContainer, toast } from "react-toastify";

export const notify = () => toast("Вы полностью не заполнили файл!");

function ErrorLoadingFile() {
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default ErrorLoadingFile;
