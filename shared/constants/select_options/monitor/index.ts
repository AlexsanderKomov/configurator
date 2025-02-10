import { IMonitor } from "@/shared/constants/select_options/monitor/interface";

export const MONITOR: IMonitor = {
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
  screenSizes: {
    screenSizes: "Размер экрана",
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
    wiFi: "Наличие Wi-Fi",
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
    recordPhoto: "Запись фото",
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
    writingVideo: "Запись видео",
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
    supportSDCard: "Поддержка SD карты",
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
    touchScreen: "Наличие сенсорного экрана",
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
    managementButtons: "Кнопки управления",
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
    movementDetectorRecord: "Запись по детектору движения",
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
    theFunctionOfTheSquare: "Функция квадратора",
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
    typeOfIntercom: "Тип интерфейса",
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
    theNumberOfMonitorsInTheMaxSystem: "Макс количество мониторов в системе",
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
    theNumberOfVideoCamerasInTheMaxSystem:
      "Макс количество видеокамер в системе",
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
    theNumberOfCallingPanelsInTheMaxSystem:
      "Макс количество вызывных панелей в системе",
    option: [
      {
        value: 2,
        label: "2",
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
  conjugationWithAnAccessIntercom: {
    conjugationWithAnAccessIntercom:
      "Возможность сопряжения с подъездным домофоном",
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
    thePresenceOfHOOKExit: "Наличие HOOK выхода",
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
    loadingYourMelodyToCall: "Загрузка своей мелодии на звонок",
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
  temperature: {
    temperature: "Рабочая температура",
    option: [
      {
        value: {
          min: 0,
          max: 0,
        },
        label: "",
      },
    ],
  },
};
