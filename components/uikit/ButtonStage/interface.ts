import { ButtonHTMLAttributes } from "react";

export interface IButtonStage extends ButtonHTMLAttributes<HTMLButtonElement> {
  stage: number;
  step: string;
  typeNode?: string | undefined;
}
