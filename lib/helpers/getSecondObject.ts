import { IGetHelpers } from "./interface";

/*
  Функция для получения массива опций для передачи option в <Select />.
 * @param {IGetHelpersObject} arr - Массив, содержащий пары ключ-значение.
 * @returns string[] - Массив опций для <Select />.
 * Эта функция нужна что создать массив опций для передачи этих опций в Select для регистрации name
*/
export function getSecondObject(arr: IGetHelpers[]) {
  const secondValues = [];

  for (const obj of arr) {
    const secondValue = Object.values(obj)[1];
    if (secondValue !== undefined) {
      secondValues.push(secondValue);
    }
  }

  return secondValues;
}
