import { useEffect } from "react";
import ProductCard from "../uikit/ProductCard";
import { ILocalStorageData, useConfigStore } from "./store";

function ReadySelection() {
  const { localStorageData, updateLocalStorageData, resetLocalStorageData } =
    useConfigStore((store) => store);

  useEffect(() => {
    const storedData = localStorage.getItem("selectedItems");

    if (storedData) {
      // Парсим данные, если они есть
      const parsedData: ILocalStorageData[] = JSON.parse(storedData);
      updateLocalStorageData(parsedData);
    } else {
      // Если данных нет, устанавливаем пустой массив или null
      resetLocalStorageData();
    }
  }, [resetLocalStorageData, updateLocalStorageData]);

  // Если данных нет, показываем сообщение
  if (!localStorageData || localStorageData.length === 0) {
    return <p>Нет выбранных элементов.</p>;
  }

  return (
    <ul className="flex gap-5">
      {localStorageData.map((item) => {
        const key = `localStorage_${item.item.name}`;
        return (
          <li key={key}>
            <ProductCard item={item.item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReadySelection;
