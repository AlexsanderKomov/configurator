import { MONITOR } from "@/shared/constants/select_options/monitor/index";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";

export function translatetListLoaded(arr) {
  let current = null;

  arr.map((qwe) => {
    if (qwe["Вид оборудования"] === "Монитор") {
      current = MONITOR;
    } else if (qwe["Вид оборудования"] === "Вызывная панель") {
      current = CALLING_PANEL;
    }
  });

  // Переводим ключи объекта в русский язык из таблицы
  return arr.map((item) => {
    const newItem = {};
    Object.keys(item).forEach((key) => {
      for (let currentKey in current) {
        if (current[currentKey].name === key) {
          newItem[currentKey] = {
            name: key,
            option: [
              {
                value: item[key],
                label: item[key],
              },
            ],
          };
        }
      }
    });
    return newItem;
  });
}
