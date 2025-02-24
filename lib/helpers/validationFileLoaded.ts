import { IArrayTranslate } from "./interface";
import { TypeEquipment } from "./enum";
import { TYPE_EQUIPMENT } from "@/shared/constants/type_equipment";
import {
  CALLING_PANEL_LENGTH_COLUMN,
  MONITOR_LENGTH_COLUMN,
} from "@/shared/constants/length_column";

export function validationFileLoaded(arr: IArrayTranslate[]) {
  const { monitor, calling_panel } = TypeEquipment;
  let status: boolean = true;

  arr.forEach((item) => {
    switch (item[TYPE_EQUIPMENT]) {
      case monitor:
        if (!!(Object.keys(item).length === MONITOR_LENGTH_COLUMN)) {
          status = false;
        } else {
          status = true;
        }
        break;
      case calling_panel:
        if (!!(Object.keys(item).length === CALLING_PANEL_LENGTH_COLUMN)) {
          status = false;
        } else {
          status = true;
        }
        break;
    }
  });

  return status;
}
