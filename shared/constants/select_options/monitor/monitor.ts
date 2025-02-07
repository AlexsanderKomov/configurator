import { IMonitor } from "../../../interfaces/selectOptionMonitor";

export const MONITOR: IMonitor = {
  manufacturer: [
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
  screenSizes: [
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
  wiFi: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
    },
  ],
  recordPhoto: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
    },
  ],
  writingVideo: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
    },
  ],
  supportSDCard: [
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
  touchScreen: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
    },
  ],
  managementButtons: [
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
  movementDetectorRecord: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
    },
  ],
  theFunctionOfTheSquare: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
    },
  ],
  typeOfIntercom: [
    {
      value: "IP",
      label: "Адресный",
    },
    {
      value: "analog",
      label: "Аналоговый",
    },
  ],
  theNumberOfMonitorsInTheMaxSystem: [
    {
      value: 4,
      label: "4",
    },
    {
      value: 6,
      label: "6",
    },
  ],
  theNumberOfVideoCamerasInTheMaxSystem: [
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
  theNumberOfCallingPanelsInTheMaxSystem: [
    {
      value: 2,
      label: "2",
    },
  ],
  supportFullHD: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
    },
  ],
  conjugationWithAnAccessIntercom: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
    },
  ],
  thePresenceOfHOOKExit: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
    },
  ],
  loadingYourMelodyToCall: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
    },
  ],
  videoSignalFormat: [
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
  power: [
    {
      value: "",
      label: "",
    },
  ],
  consumption: [{ value: "", label: "" }],
  temperature: [
    {
      value: {
        min: 0,
        max: 0,
      },
      label: "",
    },
  ],
};
