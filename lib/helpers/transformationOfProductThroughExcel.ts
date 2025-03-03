import { IArrayTranslate, IProductData } from "./interface";
import { Type, TypeEquipment, Image } from "./enum";
import { MONITOR } from "@/shared/constants/select_options/monitor";
import { IConstants } from "@/shared/constants/select_options/interface";
import { transformValue } from "./transformValue";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";

/**
 * Функция для преобразования значения Excel.
 * @param {IArrayTranslate} item - Объект, содержащий данные для преобразования.
 * @param {number} index - Индекс текущего элемента.
 * @param {IProductData} productData - Объект, содержащий данные продукта.
 * @param {IConstants} currentConstant - Объект, содержащий константы.
 * @param {Array<string>} imageUrls - Массив URL изображений.
 */
function transformValueExcel(
  item: IArrayTranslate,
  index: number,
  productData: IProductData,
  currentConstant: IConstants,
  imageUrls: Array<string>
) {
  Object.keys(item).forEach((key) => {
    for (const current in currentConstant as IConstants) {
      if (currentConstant[current].name === key) {
        productData[current] =
          currentConstant[current].name === Image.image
            ? imageUrls[index]
            : item[key] === "Да" || item[key] === "Нет"
            ? transformValue(item[key])
            : item[key];
      }
    }
  });
}

/**
 * Функция для преобразования продукта через Excel для supabase.
 * @param {IArrayTranslate[]} arr - Массив объектов, содержащих данные для преобразования.
 * @param {string[]} imageUrls - Массив URL изображений.
 * @returns {IProductData[]} - Массив объектов, содержащих преобразованные данные продукта.
 */
export function transformationOfProductThroughExcel(
  arr: IArrayTranslate[],
  imageUrls: string[]
) {
  const productDataArr: IProductData[] = [];

  arr.forEach((item, index) => {
    const productData: IProductData = {};

    switch (item[Type.typeEquipment]) {
      case TypeEquipment.monitor:
        productData["typeEquipment"] = TypeEquipment.monitor;
        transformValueExcel(item, index, productData, MONITOR, imageUrls);
        productDataArr.push(productData);
        break;
      case TypeEquipment.calling_panel:
        productData["typeEquipment"] = TypeEquipment.calling_panel;
        transformValueExcel(item, index, productData, CALLING_PANEL, imageUrls);
        productDataArr.push(productData);
        break;
    }
  });

  return productDataArr;
}
