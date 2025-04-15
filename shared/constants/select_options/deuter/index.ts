import { IConstants } from "@/shared/constants/select_options/interface";

export const DEUTER: IConstants = {
  manufacturer: {
    name: "Производитель",
    option: [
      {
        value: "Accordtek",
        label: "Accordtek",
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
  color: {
    name: "Цвет",
    option: [
      {
        value: "grey",
        label: "Серый",
      },
      {
        value: "brown",
        label: "Коричневый",
      },
    ],
  },
  mass_of_the_door: {
    name: "Масса двери, кг",
    option: [
      {
        value: 65,
        label: "65",
      },
      {
        value: 75,
        label: "75",
      },
      {
        value: 100,
        label: "100",
      },
      {
        value: 120,
        label: "120",
      },
      {
        value: 160,
        label: "160",
      },
    ],
  },
  open_position_of_the_door: {
    name: "Фиксация открытого положения двери",
    option: [
      {
        value: true,
        label: "Да",
      },
      {
        value: false,
        label: "Нет",
      },
    ],
  },
  dimensional_dimensions: {
    name: "Габаритные размеры. мм",
    option: [{ value: null, label: "" }],
  },
  wind_brake: {
    name: "Питание",
    option: [
      {
        value: true,
        label: "Да",
      },
      {
        value: false,
        label: "Нет",
      },
    ],
  },
  installation_dimensions: {
    name: "Монтажные размеры, мм",
    option: [{ value: null, label: "" }],
  },
  street: {
    name: "Возможность ставить на улице",
    option: [
      {
        value: true,
        label: "Да",
      },
    ],
  },
  price: {
    name: "Цена",
    option: [{ value: null, label: "" }],
  },
  image: {
    name: "Картинка",
    option: [{ value: null, label: "" }],
  },
};
