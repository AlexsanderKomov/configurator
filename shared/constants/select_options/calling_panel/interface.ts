export interface ICallingPanel {
  manufacturer: IManufacturer[];
  theNumberOfSubscribers: ITheNumberOfSubscribers[];
  permission: IPermission[];
  videoSignalFormat: IVideoSignalFormat[];
  wiFi: IWiFi[];
  supportFullHD: ISupportFullHD[];
  managementButtons: IManagementButtons[];
  angleOfView: IAngleOfView[];
  iKIllumination: IIKIllumination[];
  hdFormatSwitcher: IHdFormatSwitcher[];
  power: IPower[];
  consumption: IConsumption[];
  temperature: ITemperature[];
}
// Производитель
interface IManufacturer {
  value: string;
  label: string;
}

// Число абонентов панели
interface ITheNumberOfSubscribers {
  value: number;
  label: string;
}

// разрешение камеры
interface IPermission {
  value: number;
  label: string;
}

// Формат видеосигнала
interface IVideoSignalFormat {
  value: string;
  label: string;
}

//Доступ со смартфона (Wi-Fi)
interface IWiFi {
  value: boolean;
  label: string;
}

//Поддержка Full HD
interface ISupportFullHD {
  value: boolean;
  label: string;
}
// Кнопка вызова панели
interface IManagementButtons {
  value: string;
  label: string;
}
//Угол обзора
interface IAngleOfView {
  value: number;
  label: string;
}
//ИК-подсветка
interface IIKIllumination {
  value: boolean;
  label: string;
}

//Переключатель форматов AHD/аналог на корпусе
interface IHdFormatSwitcher {
  value: boolean;
  label: string;
}

// питание
interface IPower {
  value: string;
  label: string;
}
// потребление
interface IConsumption {
  value: string;
  label: string;
}
// рабочая температура
interface ITemperature {
  value: {
    min: number;
    max: number;
  };
  label: string;
}
