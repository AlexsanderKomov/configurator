import { FormDataSubmit } from "@/components/layout/Main/AddProduct/TypeOfSystems/NodeTypeForm/interface";
import { IConstants } from "@/shared/constants/select_options/interface";
import { Image } from "./enum";
import { IProductData } from "./interface";

/**
 * Преобразует данные из формы в объект IConstants.
 * @param data - Данные из формы.
 * @param constant - Константы для преобразования.
 * @param imageUrl - URL изображения.
 * @returns Преобразованный объект IConstants.
 */
export function transformationOfProductThroughForm(
  data: FormDataSubmit,
  constant: IConstants,
  imageUrl: string,
  typeEquipment: string
): IProductData {
  const productData: IProductData = {};

  Object.keys(constant).forEach((item) => {
    const value = data[item]?.value;

    // Если поле является изображением, используем imageUrl
    if (constant[item].name === Image.image) {
      productData["image"] = imageUrl;
      productData["type_equipment"] = typeEquipment;
    } else {
      // Иначе сохраняем значение из формы
      productData[item] = value;
    }
  });

  return productData;
}
