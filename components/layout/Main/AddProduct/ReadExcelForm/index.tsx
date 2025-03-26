import ListLoadedProducts from "./ListLoadedProducts";
import ReadExcelInput from "./ReadExcelInput";
import { useTypeStore } from "../store";
import Button from "@/components/uikit/Button";
import { error, success } from "@/lib/helpers/toastifyFunctions";

function ReadExcelForm() {
  const { data, loading, dataExcel, resetData } = useTypeStore(
    (store) => store
  );

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/add_product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataExcel),
      });

      const result = await response.json(); // Парсим ответ сервера

      if (response.ok) {
        success(result.message);

        resetData();
      } else {
        const imagesToDelete = dataExcel.map((product) =>
          product.image.replace("http://localhost:3001/uploads/", "")
        );
        // Если произошла ошибка, удаляем изображения
        const deleteResponse = await fetch(
          "http://localhost:3001/api/delete_images",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ images: imagesToDelete }),
          }
        );

        if (!deleteResponse.ok) {
          error("Ошибка при удалении изображений");
        }

        // Если сервер вернул артикул дубликата, выводим его
        error(result.message);
        resetData();
      }
    } catch (err) {
      error(`Ошибка при отправке данных: ${err}`);
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
