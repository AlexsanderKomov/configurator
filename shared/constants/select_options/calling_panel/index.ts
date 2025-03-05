import { IConstants } from "@/shared/constants/select_options/interface";

export const CALLING_PANEL: IConstants = {
  manufacturer: {
    name: "Производитель",
    option: [
      {
        value: "falconEye",
        label: "Falcon Eye",
      },
      {
        value: "beward",
        label: "BEWARD",
      },
      {
        value: "dahua",
        label: "Dahua",
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
  theNumberOfSubscribers: {
    name: "Число абонентов панели",
    option: [
      {
        value: 1,
        label: "1",
      },
      {
        value: 2,
        label: "2",
      },
      {
        value: 3,
        label: "3",
      },
      {
        value: 4,
        label: "4",
      },
      {
        value: 5,
        label: "5",
      },
    ],
  },
  videoSignalFormat: {
    name: "Формат видеосигнала",
    option: [{ value: null, label: "" }],
  },
  permission: {
    name: "Разрешение камеры",
    option: [
      {
        value: 1,
        label: "1",
      },
      {
        value: 2,
        label: "2",
      },
    ],
  },
  typeOfIntercom: {
    name: "Тип интерфейса",
    option: [
      {
        value: "IP",
        label: "IP",
      },
      {
        value: "analog",
        label: "Аналоговый",
      },
    ],
  },

  wiFi: {
    name: "Доступ со смартфона (Wi-Fi)",
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
  supportFullHD: {
    name: "Поддержка Full HD",
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
  managementButtons: {
    name: "Кнопка вызова панели",
    option: [
      {
        value: "sensory",
        label: "Сенсорные",
      },
      {
        value: "mechanical",
        label: "Механические",
      },
      {
        value: "touch",
        label: "Только экранное утравление",
      },
    ],
  },
  angleOfView: {
    name: "Угол обзора",
    option: [
      {
        value: 70,
        label: "70°",
      },
      {
        value: 74,
        label: "74°",
      },
      {
        value: 90,
        label: "90°",
      },
      {
        value: 115,
        label: "115°",
      },
      {
        value: 120,
        label: "120°",
      },
      {
        value: 150,
        label: "150°",
      },
      {
        value: 160,
        label: "160°",
      },
    ],
  },
  iKIllumination: {
    name: "ИК-подсветка",
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
  hdFormatSwitcher: {
    name: "Переключатель форматов AHD/аналог на корпусе",
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
  power: {
    name: "Питание",
    option: [
      {
        value: null,
        label: "",
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
      {
        value: false,
        label: "Нет",
      },
    ],
  },
  image: {
    name: "Картинка",
    option: [{ value: null, label: "" }],
  },
};
