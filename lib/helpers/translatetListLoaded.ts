import { MONITOR } from "@/shared/constants/select_options/monitor/index";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";
import { IConstants } from "@/shared/constants/select_options/interface";
import { TypeEquipment } from "./enum";
import { transformValue } from "./transformValue";
import { IArrayTranslate } from "./interface";
import { TYPE_EQUIPMENT } from "@/shared/constants/type_equipment";

/**
 * Преобразует список загруженных данных из файла excel в вид под интерфейс IConstants.
 * @param arr - Массив данных для преобразования.
 * @returns Преобразованный массив данных.
 */

export function translatetListLoaded(arr: IArrayTranslate[]) {
  const { monitor, calling_panel } = TypeEquipment;

  let current: IConstants | null = null;

  arr.forEach((item) => {
    switch (item[TYPE_EQUIPMENT]) {
      case monitor:
        current = MONITOR;
        break;
      case calling_panel:
        current = CALLING_PANEL;
        break;
    }
  });

  // Переводим ключи объекта на русский язык из таблицы
  return arr.map((item) => {
    const newItem: IConstants = {};

    Object.keys(item).forEach((key) => {
      for (const currentKey in current) {
        if (current[currentKey].name === key) {
          newItem[currentKey] = {
            name: key,
            option: [
              {
                value: transformValue(item[key]),
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
