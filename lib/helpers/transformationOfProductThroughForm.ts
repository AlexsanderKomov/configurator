import { FormDataSubmit } from "@/components/layout/Main/TypeOfSystems/components/NodeTypeForm/interface";
import {
  IConstants,
  IOption,
} from "@/shared/constants/select_options/interface";
import { Image } from "./enum";

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
  imageUrl: string
) {
  const newItem: IConstants = {};
  console.log(data);

  Object.keys(constant).forEach((item) => {
    // Получаем значение и метку из data
    const value = data[item]?.value;
    const label = data[item]?.label;

    // Создаем массив option
    const option: IOption[] = [
      {
        value: constant[item].name === Image.image ? imageUrl : value, // Значение из data
        label:
          constant[item].name === Image.image
            ? imageUrl
            : label || String(value), // Если label отсутствует, используем value как строку
      },
    ];

    // Добавляем поле в новый объект
    newItem[item] = {
      name: constant[item].name, // Используем имя из constant
      option: option, // Добавляем массив option
    };
  });

  console.log(newItem);
  return newItem;
}
