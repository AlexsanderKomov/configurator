import { IConstants } from "@/shared/constants/select_options/interface";
import { IProductData } from "./interface";
import { Type, TypeEquipment } from "./enum";

export function transformationOfProductThroughExcel(
  firstSheetData
): IProductData {
  const productData: IProductData = {};

  Object.keys(firstSheetData).forEach((key) => {
    switch (firstSheetData[key][Type.typeEquipment]) {
      case TypeEquipment.monitor:
        productData["typeEquipment"] = TypeEquipment.monitor;
        break;
      case TypeEquipment.calling_panel:
        productData["typeEquipment"] = TypeEquipment.calling_panel;
        break;
    }
  });

  return productData;
}
