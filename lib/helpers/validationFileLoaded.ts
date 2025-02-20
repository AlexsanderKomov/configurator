import { IArrayTranslate } from "./interface";
import { TypeEquipment } from "./enum";
import { TYPE_EQUIPMENT } from "@/shared/constants/type_equipment";

export function validationFileLoaded(arr: IArrayTranslate[]) {
  const { monitor, calling_panel } = TypeEquipment;
  let status: boolean = true;

  arr.forEach((item) => {
    switch (item[TYPE_EQUIPMENT]) {
      case monitor:
        if (!!(Object.keys(item).length === 25)) {
          status = false;
        } else {
          status = true;
        }
        break;
      case calling_panel:
        if (!!(Object.keys(item).length === 17)) {
          status = false;
        } else {
          status = true;
        }
        break;
    }
  });

  return status;
}
