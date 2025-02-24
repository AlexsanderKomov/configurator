import { MONITOR } from "@/shared/constants/select_options/monitor/index";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";
import { IConstants } from "@/shared/constants/select_options/interface";
import { Image, TypeEquipment } from "./enum";
import { transformValue } from "./transformValue";
import { IArrayTranslate } from "./interface";
import { TYPE_EQUIPMENT } from "@/shared/constants/type_equipment";

/**
 * Преобразует список загруженных данных из файла Excel в вид, соответствующий интерфейсу IConstants.
 * @param arr - Массив данных для преобразования.
 * @param image - Массив изображений в формате base64.
 * @returns Преобразованный массив данных.
 */
export function transformListLoaded(arr: IArrayTranslate[], image: string[]) {
  const { monitor, calling_panel } = TypeEquipment;

  return arr.map((item, index) => {
    // Определяем текущий тип оборудования
    let current: IConstants | null = null;

    switch (item[TYPE_EQUIPMENT]) {
      case monitor:
        current = MONITOR;
        break;
      case calling_panel:
        current = CALLING_PANEL;
        break;
      default:
        // Если тип оборудования не определен, пропускаем элемент
        return {} as IConstants;
    }

    // Переводим ключи объекта на русский язык из таблицы
    const newItem: IConstants = {};
    Object.keys(item).forEach((key) => {
      if (current) {
        for (const currentKey in current) {
          if (current[currentKey].name === key) {
            newItem[currentKey] = {
              name: key,
              option: [
                {
                  value:
                    current[currentKey].name === Image.image
                      ? image[index]
                      : transformValue(item[key]),
                  label:
                    current[currentKey].name === Image.image
                      ? image[index]
                      : item[key],
                },
              ],
            };
          }
        }
      }
    });

    return newItem;
  });
}
