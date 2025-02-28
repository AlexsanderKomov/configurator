import { IConstants } from "@/shared/constants/select_options/interface";
import { IProductData } from "./interface";

export function transformationOfProductThroughExcel(
  constant: IConstants,
  typeEquipment: string
): IProductData[] {
  const productData: IProductData = {};

  console.log(data);


  // return data.map((item) => {
  //   const productData: IProductData = {};

  //   // Проходим по каждому ключу в объекте
  //   for (const constant in item) {
  //     if (item[constant]?.option?.length > 0) {
  //       // Берём первое значение `value` из массива `option`
  //       productData[key] = item[key].option[0].value;
  //     } else {
  //       // Если `option` пустой, сохраняем `null`
  //       productData[key] = null;
  //     }
  //   }

  return productData;
}
