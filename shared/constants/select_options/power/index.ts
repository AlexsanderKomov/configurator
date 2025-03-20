import { IConstants } from "@/shared/constants/select_options/interface";

export const POWER: IConstants = {
  manufacturer: {
    name: "Производитель",
    option: [
      {
        value: "Accordtek",
        label: "Accordtek",
      },
      {
        value: "bastion",
        label: "Бастион",
      },
    ],
  },
  name: {
    name: "Наименование",
    option: [
      {
        value: null,
        label: "",
      },
    ],
  },
  article: {
    name: "Артикул",
    option: [
      {
        value: null,
        label: "",
      },
    ],
  },
  output_current: {
    name: "Сила тока выходная",
    option: [{ value: null, label: "" }],
  },
  input_voltage: {
    name: "Напряжение входное",
    option: [{ value: 220, label: "220В" }],
  },
  output_voltage: {
    name: "Напряжение выходное",
    option: [{ value: 12, label: "12В" }],
  },
  color: {
    name: "Цвет",
    option: [
      {
        value: "black",
        label: "Черный",
      },
      {
        value: "white",
        label: "Белый",
      },
    ],
  },
  image: {
    name: "Картинка",
    option: [{ value: null, label: "" }],
  },
  price: {
    name: "Цена",
    option: [{ value: null, label: "" }],
  },
};
