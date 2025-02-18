import { MONITOR } from "@/shared/constants/select_options/monitor/index";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";
import { IConstants } from "@/shared/constants/select_options/interface";
import { TypeEquipment } from "./enum";

export function translatetListLoaded(arr: IConstants[]) {
  let current: IConstants | null = null;

  arr.map((item) => {
    switch (item[TypeEquipment.typeEquipment]) {
      case TypeEquipment.monitor:
        current = MONITOR;
        break;
      case TypeEquipment.calling_panel:
        current = CALLING_PANEL;
        break;
    }
  });

  // Переводим ключи объекта в русский язык из таблицы
  return arr.map((item) => {
    const newItem: IConstants = {};
    Object.keys(item).forEach((key) => {
      for (const currentKey in current) {
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
