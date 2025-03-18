import { IData } from "@/components/configurator/store";

export const saveItemToLocalStorage = (item: IData) => {
  // Получаем текущие данные из localStorage
  const storedItems = localStorage.getItem("selectedItems");

  // Парсим данные, если они есть, или создаем пустой массив
  const items = storedItems ? JSON.parse(storedItems) : [];

  // Добавляем новый элемент в массив
  items.push(item);

  // Сохраняем обновленный массив обратно в localStorage
  localStorage.setItem("selectedItems", JSON.stringify(items));
};
