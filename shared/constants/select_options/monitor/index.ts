import { IConstants } from "@/shared/constants/select_options/interface";

export const MONITOR: IConstants = {
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
  screenSizes: {
    name: "Размер экрана",
    option: [
      {
        value: 4,
        label: "4 дюйма",
      },
      {
        value: 7,
        label: "7 дюймов",
      },
      {
        value: 10,
        label: "10 дюймов",
      },
    ],
  },
  wiFi: {
    name: "Наличие Wi-Fi",
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
  recordPhoto: {
    name: "Запись фото",
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
  writingVideo: {
    name: "Запись видео",
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
  supportSDCard: {
    name: "Поддержка SD карты",
    option: [
      {
        value: false,
        label: "Нет",
      },
      {
        value: 32,
        label: "32 Гб",
      },
      {
        value: 64,
        label: "64 Гб",
      },
      {
        value: 128,
        label: "128 Гб",
      },
      {
        value: 256,
        label: "256 Гб",
      },
    ],
  },
  touchScreen: {
    name: "Наличие сенсорного экрана",
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
    name: "Кнопки управления",
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
  movementDetectorRecord: {
    name: "Запись по детектору движения",
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
  theFunctionOfTheSquare: {
    name: "Функция квадратора",
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
  typeOfIntercom: {
    name: "Тип интерфейса",
    option: [
      {
        value: "IP",
        label: "Адресный",
      },
      {
        value: "analog",
        label: "Аналоговый",
      },
    ],
  },
  theNumberOfMonitorsInTheMaxSystem: {
    name: "Макс количество мониторов в системе",
    option: [
      {
        value: 4,
        label: "4",
      },
      {
        value: 6,
        label: "6",
      },
    ],
  },
  theNumberOfVideoCamerasInTheMaxSystem: {
    name: "Макс количество видеокамер в системе",
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
        value: 16,
        label: "16",
      },
    ],
  },
  theNumberOfCallingPanelsInTheMaxSystem: {
    name: "Макс количество вызывных панелей в системе",
    option: [
      {
        value: 2,
        label: "2",
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
  conjugationWithAnAccessIntercom: {
    name: "Возможность сопряжения с подъездным домофоном",
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
  thePresenceOfHOOKExit: {
    name: "Наличие HOOK выхода",
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
  loadingYourMelodyToCall: {
    name: "Загрузка своей мелодии на звонок",
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
  videoSignalFormat: {
    name: "Формат видеосигнала",
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
