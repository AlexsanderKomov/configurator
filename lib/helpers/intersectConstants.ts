import { IConstants } from "@/shared/constants/select_options/interface";

interface IFirst {
  [x: string]: boolean | string | number;
}

export function intersectConstants(
  first: IConstants,
  second: IFirst
): IConstants {
  const result: IConstants = {};

  // Проходим по всем ключам первого объекта
  for (const key in first) {
    if (second.hasOwnProperty(key)) {
      // Если ключ есть во втором объекте, добавляем его в результат
      result[key] = {
        name: first[key].name,
        option: [...first[key].option],
      };
    }
  }

  return result;
}
