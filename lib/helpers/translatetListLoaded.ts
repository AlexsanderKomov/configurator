import { MONITOR } from "@/shared/constants/select_options/monitor/index";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";
import { IConstants } from "@/shared/constants/select_options/interface";
import { TypeEquipment } from "./enum";
import { transformValue } from "./transformValue";
import { IArrayTranslate } from "./interface";

const TYPE_EQUIPMENT = "Вид оборудования";

export function translatetListLoaded(arr: IArrayTranslate[]) {
  let current: IConstants | null = null;

  arr.forEach((item) => {
    switch (item[TYPE_EQUIPMENT]) {
      case TypeEquipment.monitor:
        current = MONITOR;
        break;
      case TypeEquipment.calling_panel:
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
