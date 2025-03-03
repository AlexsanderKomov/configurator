import { ToastContainer } from "react-toastify";
import ListLoadedProducts from "./ListLoadedProducts";
import ReadExcelInput from "./ReadExcelInput";
import { useTypeStore } from "../store";

function ReadExcelForm() {
  const { data, loading, dataExcel } = useTypeStore((store) => store);

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3001/api/add_product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataExcel),
    });

    if (response.ok) {
      console.log("Продукты добавлены");
    } else {
      console.log("Ошибка при добавлении продуктов");
    }
  };

  return (
    <>
      <ReadExcelInput />
      <ListLoadedProducts />
      <ToastContainer />
      {data.length !== 0 && !loading && (
        <button onClick={handleSubmit} type="button">
          Добавить продукт
        </button>
      )}
    </>
  );
}

export default ReadExcelForm;
