import { ICallingPanel } from "@/shared/constants/select_options/calling_panel/interface";

export const CALLING_PANEL: ICallingPanel = {
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
  theNumberOfSubscribers: [
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
  permission: [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
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

  angleOfView: [
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
  iKIllumination: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
    },
  ],
  hdFormatSwitcher: [
    {
      value: false,
      label: "Нет",
    },
    {
      value: true,
      label: "Да",
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
