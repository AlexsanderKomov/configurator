import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";
import { IConstants } from "@/shared/constants/select_options/interface";
import { LOCK } from "@/shared/constants/select_options/lock";
import { MONITOR } from "@/shared/constants/select_options/monitor";
import { POWER } from "@/shared/constants/select_options/power";

/**
 * Объединяет несколько объектов IConstants в один, сохраняя уникальные значения.
 * @param constantsList Массив объектов IConstants для объединения.
 * @returns Объект IConstants с уникальными полями и опциями.
 */
function mergeUniqueConstants(constantsList: IConstants[]): IConstants {
  const merged: IConstants = {};

  for (const constants of constantsList) {
    for (const [key, field] of Object.entries(constants)) {
      if (!merged[key]) {
        // Если поля нет в объединенном объекте, добавляем его
        merged[key] = {
          name: field.name,
          option: [...field.option],
        };
      } else {
        // Если поле уже есть, объединяем опции, сохраняя уникальность
        const existingOptions = merged[key].option;
        const newOptions = field.option;

        // Объединяем опции и убираем дубликаты (по value)
        const uniqueOptions = [...existingOptions];
        for (const newOption of newOptions) {
          const isDuplicate = existingOptions.some(
            (opt) => opt.value === newOption.value
          );
          if (!isDuplicate) {
            uniqueOptions.push(newOption);
          }
        }

        merged[key].option = uniqueOptions;
      }
    }
  }

  return merged;
}

// Пример использования:
export const ALL_CONSTANTS = mergeUniqueConstants([
  CALLING_PANEL,
  LOCK,
  MONITOR,
  POWER,
]);
