import { IData } from "@/components/configurator/store";
import { Stage } from "@/lib/enumStage";

export interface IStoredItem {
  item: IData;
  stage: Stage;
}

export const saveItemToLocalStorage = (item: IData, stage: Stage) => {
  // Получаем текущие данные из localStorage
  const storedItems = localStorage.getItem("selectedItems");

  // Парсим данные, если они есть, или создаем пустой массив
  const items: IStoredItem[] = storedItems ? JSON.parse(storedItems) : [];

  // Удаляем старый элемент с таким же type_equipment
  const updatedItems = items.filter(
    (existingItem) => existingItem.item.type_equipment !== item.type_equipment
  );

  // Добавляем новый элемент
  updatedItems.push({ item, stage });

  // Сохраняем обновленный массив обратно в localStorage
  localStorage.setItem("selectedItems", JSON.stringify(updatedItems));
};

export const deleteLastItemFromLocalStorage = (currentStage: Stage) => {
  const storedItems = localStorage.getItem("selectedItems");
  if (storedItems) {
    const items: IStoredItem[] = JSON.parse(storedItems);

    // Находим индекс последнего элемента, добавленного на текущем шаге
    const lastItemIndex = items.findIndex(
      (storedItem) => storedItem.stage === currentStage
    );

    // Если такой элемент найден, удаляем его
    if (lastItemIndex !== -1) {
      const updatedData = items.filter((_, index) => index !== lastItemIndex);
      localStorage.setItem("selectedItems", JSON.stringify(updatedData));
    }
  }
};
