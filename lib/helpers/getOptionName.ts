import { getFirstObject } from "./getFirstObject";
import { getSecondObject } from "./getSecondObject";
import { getFirstKey } from "./getFirstKey";
import { IConstants } from "@/shared/constants/select_options/interface";
import { IGetHelpers } from "./interface";

/**
 * Функция для получения массива состоящего из 3 массивов содежращих опции и названия для ListOption.
 * @param {IConstants[]} obj - Массив объектов, содержащих пары ключ-значение.
 * @returns {IGetHelpersObject[]} - Массив, содержащий результаты вызова функций getFirstObject, getSecondObject и getFirstKey.
 * Эта функция нужна для создания массива всех значений для ListOption.
 */

export function getOptionName(obj: IConstants) {
  const nestedObjects: IGetHelpers[] = [];

  for (const [, value] of Object.entries(obj)) {
    if (
      typeof value === "object" &&
      value !== null &&
      Object.values(value).length > 0
    ) {
      nestedObjects.push(value);
    }
  }
  console.log(obj);
  return [
    getFirstObject(nestedObjects),
    getSecondObject(nestedObjects),
    getFirstKey(obj),
  ];
}
