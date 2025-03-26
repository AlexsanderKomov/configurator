import { IConstants } from "@/shared/constants/select_options/interface";

export type INodeProperties = IConstants;

type FormFieldValue = string | number | boolean;

export interface FormField<T = FormFieldValue> {
  value: T;
  label?: string;
}

interface BaseFormData {
  [key: string]: FormField<FormFieldValue>; // Индексная сигнатура для всех полей
}

interface ImageFormData {
  image: FormField<FileList>; // Конкретное поле image
}

export type FormDataSubmit = BaseFormData & ImageFormData; // Объединяем типы
