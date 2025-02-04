import { InputHTMLAttributes } from "react";

export interface IRadioButton extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}
