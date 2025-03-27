import ListLoadedProducts from "./ListLoadedProducts";
import ReadExcelInput from "./ReadExcelInput";
import { useTypeStore } from "../store";
import Button from "@/components/uikit/Button";
import { error, success } from "@/lib/helpers/toastifyFunctions";
import { useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";

function ReadExcelForm() {
  const pathname = usePathname();
  const { data, loading, dataExcel, resetData } = useTypeStore(
    (store) => store
  );

  const imagesToDelete = useCallback(async () => {
    if (!dataExcel.length) return;

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
  }, [dataExcel]);

  // Обработчик закрытия/обновления страницы
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (dataExcel.length) {
        e.preventDefault();
        imagesToDelete();
        // Современный способ установки сообщения
        const confirmationMessage =
          "У вас есть несохраненные данные. Продолжить?";
        // Для совместимости (хотя и устарело)
        e.returnValue = confirmationMessage;
        // Современный способ возврата сообщения
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [dataExcel, imagesToDelete]);

  // Обработчик SPA-переходов (для App Router)
  useEffect(() => {
    if (pathname !== "/add_product") {
      imagesToDelete();
      resetData();
    }
  }, [pathname, imagesToDelete, resetData]);

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
        imagesToDelete();
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
