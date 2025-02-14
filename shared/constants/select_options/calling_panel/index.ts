import { ICallingPanel } from "@/shared/constants/select_options/calling_panel/interface";

export const CALLING_PANEL: ICallingPanel = {
  manufacturer: {
    manufacturer: "Производитель",
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
    article: "Артикул",
    option: [
      {
        value: null,
        label: "",
      },
    ],
  },
  theNumberOfSubscribers: {
    theNumberOfSubscribers: "Число абонентов панели",
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
  permission: {
    permission: "Разрешение камеры",
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
    typeOfIntercom: "Тип интерфейса",
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
  videoSignalFormat: {
    videoSignalFormat: "Формат видеосигнала",
    option: [
      {
        value: "NTSC",
        label: "NTSC",
      },
      {
        value: "PAL",
        label: "PAL",
      },
      {
        value: "SECAM",
        label: "SECAM",
      },
      {
        value: "HDMI",
        label: "HDMI",
      },
      {
        value: "VGA",
        label: "VGA",
      },
      {
        value: "DVI",
        label: "DVI",
      },
      {
        value: "SDI",
        label: "SDI",
      },
      {
        value: "Component",
        label: "Component",
      },
      {
        value: "YCbCr",
        label: "YCbCr",
      },
      {
        value: "eDP",
        label: "eDP",
      },
      {
        value: "DisplayPort",
        label: "DisplayPort",
      },
    ],
  },
  wiFi: {
    wiFi: "Доступ со смартфона (Wi-Fi)",
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
    supportFullHD: "Поддержка Full HD",
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
    managementButtons: "Кнопка вызова панели",
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
    angleOfView: "Угол обзора",
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
    iKIllumination: "ИК-подсветка",
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
    hdFormatSwitcher: "Переключатель форматов AHD/аналог на корпусе",
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
    power: "Питание",
    option: [
      {
        value: null,
        label: "",
      },
    ],
  },
  consumption: {
    consumption: "Потребление",
    option: [{ value: null, label: "" }],
  },
  street: {
    street: "Возможность ставить на улице",
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
};
