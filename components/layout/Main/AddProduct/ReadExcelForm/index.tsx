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
      {data.length !== 0 && !loading && (
        <button
          onClick={handleSubmit}
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Добавить продукт
        </button>
      )}
    </>
  );
}

export default ReadExcelForm;
