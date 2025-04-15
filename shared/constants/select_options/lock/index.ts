import { IConstants } from "@/shared/constants/select_options/interface";

export const LOCK: IConstants = {
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
  type_lock: {
    name: "Тип замка",
    option: [
      {
        value: "electromagnetic_lock",
        label: "Элетромагнитный замок",
      },
      {
        value: "electromechanical_lock",
        label: "Электромеханический замок",
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
  corner: {
    name: "Угол монтажный",
    option: [
      {
        value: false,
        label: "Нет",
      },
      {
        value: true,
        label: "Да",
      },
    ],
  },
  reed_switch: {
    name: "Наличие геркона",
    option: [
      {
        value: false,
        label: "Нет",
      },
      {
        value: true,
        label: "Да",
      },
    ],
  },
  presence_of_a_key: {
    name: "Наличие ключа",
    option: [
      {
        value: false,
        label: "Нет",
      },
      {
        value: true,
        label: "Да",
      },
    ],
  },
  holding_force: {
    name: "Сила удержания",
    option: [{ value: null, label: "" }],
  },
  power: {
    name: "Питание",
    option: [
      {
        value: "12",
        label: "12В",
      },
      {
        value: "24",
        label: "24В",
      },
      {
        value: "12/24",
        label: "12В/24В",
      },
    ],
  },
  consumption: {
    name: "Потребление",
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
