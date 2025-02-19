/*
  Функция для получения первого ключа объекта.
 * @param {IConstants} obj - Объект, содержащий пары ключ-значение.
 * @returns {string[]} - Массив ключей из объекта.
 * Эта функция нужна что создать массив первый ключей объекта для передачи этих ключей в Select для регистрации name
*/

import { IConstants } from "@/shared/constants/select_options/interface";

export function getFirstKey(obj: IConstants): string[] {
  const firstValues: string[] = [];

  for (const item in obj) {
    firstValues.push(item);
  }

  return firstValues;
}
