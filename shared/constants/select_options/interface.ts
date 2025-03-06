export interface IConstants {
  [x: string]: {
    name: string;
    option: IOption[];
  };
}

// интерфейс для опций
export interface IOption {
  value: string | number | boolean | null;
  label: string;
}
