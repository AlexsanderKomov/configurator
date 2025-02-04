import {
  IDevice,
  IManufacturer,
  IScreenSize,
  IWifi,
} from "@/app/shared/interfaces/selectOption";

export interface IFormData {
  device: string;
  title: string;
  manufacturer: string;
  image: string;
  display: string;
  description: string;
  wifi: boolean;
}

export interface ISelectCardProductProps {
  readonly options: IDevice[] | IManufacturer[] | IScreenSize[] | IWifi[];
  readonly descr: string;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  formData: IFormData;
}
