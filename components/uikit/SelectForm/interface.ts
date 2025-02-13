// интерфейс для опций
interface IOption {
  value: string | number | boolean | null;
  label: string;
}

export interface ISelectForm {
  name: string;
  defaultValue: IOption;
  options: IOption[];
}
