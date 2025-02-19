import { IGetHelpers } from "./interface";

/*
  Функция для получения массива для заполнения label в ListOption.
 * @param {IGetHelpersObject} arr - Массив, содержащий пары ключ-значение.
 * @returns string[] - Массив опций для <Select />.
 * Эта функция нужна что создать массив названия для вставки в label
*/

export function getFirstObject(arr: IGetHelpers[]): string[] {
  const firstValues: string[] = [];

  for (const item of arr) {
    const firstValue = Object.values(item)[0];
    if (firstValue !== undefined) {
      firstValues.push(firstValue);
    }
  }

  return firstValues;
}
