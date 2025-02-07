import { IScreenSize, IWifi } from "@/shared/interfaces/selectOptionMonitor";

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
  readonly options: IScreenSize[] | IWifi[];
  readonly descr: string;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  formData: IFormData;
}
