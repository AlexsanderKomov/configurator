import {
  IOptionsDevice,
  IOptionsManufacturer,
  IOptionsDisplay,
  IOptionsWifi,
} from "./interfase";

export const optionsDevice: IOptionsDevice[] = [
  { value: "callingPanel", label: "Вызывная панель" },
  { value: "monitor", label: "Монитор" },
];

export const optionsManufacturer: IOptionsManufacturer[] = [
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
];

export const optionsDisplay: IOptionsDisplay[] = [
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
];

export const optionsWifi: IOptionsWifi[] = [
  {
    value: false,
    label: "Нет",
  },
  {
    value: true,
    label: "Да",
  },
];
