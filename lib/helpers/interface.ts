import { IOption } from "@/shared/constants/select_options/interface";

export interface IGetHelpers {
  name: string;
  option: IOption[];
}

export interface IArrayTranslate {
  [x: string]: string;
}

export interface IProductData {
  [x: string]: string | number | boolean;
}
