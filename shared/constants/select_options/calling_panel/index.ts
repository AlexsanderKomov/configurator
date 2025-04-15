import { IConstants } from "@/shared/constants/select_options/interface";

export const CALLING_PANEL: IConstants = {
  manufacturer: {
    name: "Производитель",
    option: [
      {
        value: "Falcon Eye",
        label: "Falcon Eye",
      },
      {
        value: "BEWARD",
        label: "BEWARD",
      },
      {
        value: "Dahua",
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
  the_umber_of_subscribers: {
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
  video_signal_format: {
    name: "Формат видеосигнала",
    option: [
      {
        value: "CVBS",
        label: "CVBS",
      },
      {
        value: "AHD",
        label: "AHD",
      },
    ],
  },
  type_of_intercom: {
    name: "Тип интерфейса",
    option: [
      {
        value: "analog",
        label: "Аналоговый",
      },
      {
        value: "IP",
        label: "IP",
      },
    ],
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
  wi_fi: {
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
  support_full_hd: {
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
  management_buttons: {
    name: "Кнопка вызова панели",
    option: [
      {
        value: "mechanical",
        label: "Механические",
      },
      {
        value: "sensory",
        label: "Сенсорные",
      },

      {
        value: "touch",
        label: "Только экранное управление",
      },
    ],
  },
  angle_of_view: {
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
  ik_illumination: {
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
  hd_format_switcher: {
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
        value: "12",
        label: "12В",
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
  price: {
    name: "Цена",
    option: [{ value: null, label: "" }],
  },
  image: {
    name: "Картинка",
    option: [{ value: null, label: "" }],
  },
};
