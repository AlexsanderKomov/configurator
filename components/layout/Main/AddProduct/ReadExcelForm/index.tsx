import ListLoadedProducts from "./ListLoadedProducts";
import ReadExcelInput from "./ReadExcelInput";
import { useTypeStore } from "../store";
import Button from "@/components/uikit/Button";

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
        <Button onClick={handleSubmit} text="Добавить продукт" />
      )}
    </>
  );
}

export default ReadExcelForm;
