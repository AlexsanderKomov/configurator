export interface IOptionsDevice {
  value: string;
  label: string;
}

export interface IOptionsManufacturer {
  value: string;
  label: string;
}

export interface IOptionsDisplay {
  value: number;
  label: string;
}

export interface IOptionsWifi {
  value: boolean;
  label: string;
}

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
  readonly options:
    | IOptionsDevice[]
    | IOptionsManufacturer[]
    | IOptionsDisplay[]
    | IOptionsWifi[];
  readonly descr: string;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  formData: IFormData;
}

export interface IHandleSelectChange {
  readonly value: number | string | boolean;
}

export interface IRadioBtnProps {
  name: string;
  id: string;
}
