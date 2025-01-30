import { InputHTMLAttributes } from "react";

interface IRadioOption {
  /** Подпись к радиокнопке */
  label: string;
  /** Значение */
  value: string;
  /** Идентификатор */
  id?: string;
}

export interface IRadionButtonGroup
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: IRadioOption[];
  className?: string;
}
