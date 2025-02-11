export interface ICallingPanel {
  // Производитель
  manufacturer: {
    manufacturer: string;
    option: IOption[];
  };
  // Число абонентов панели
  theNumberOfSubscribers: {
    theNumberOfSubscribers: string;
    option: IOption[];
  };
  // разрешение камеры
  permission: {
    permission: string;
    option: IOption[];
  };
  // тип интерфейса
  typeOfIntercom: {
    typeOfIntercom: string;
    option: IOption[];
  };
  // Формат видеосигнала
  videoSignalFormat: {
    videoSignalFormat: string;
    option: IOption[];
  };
  // Доступ со смартфона (Wi-Fi)
  wiFi: {
    wiFi: string;
    option: IOption[];
  };
  // Поддержка Full HD
  supportFullHD: {
    supportFullHD: string;
    option: IOption[];
  };
  // Кнопка вызова панели
  managementButtons: {
    managementButtons: string;
    option: IOption[];
  };
  // Угол обзора
  angleOfView: {
    angleOfView: string;
    option: IOption[];
  };
  // ИК-подсветка
  iKIllumination: {
    iKIllumination: string;
    option: IOption[];
  };
  // Переключатель форматов AHD/аналог на корпусе
  hdFormatSwitcher: {
    hdFormatSwitcher: string;
    option: IOption[];
  };
  // Питание
  power: {
    power: string;
    option: IOption[];
  };
  // Потребление
  consumption: {
    consumption: string;
    option: IOption[];
  };
  // Рабочая температура
  temperature: {
    temperature: string;
    option: [
      {
        value: {
          min: number | null;
          max: number | null;
        };
        label: string;
      }
    ];
  };
}

// Интерфейс для опций
interface IOption {
  value: string | number | boolean | null;
  label: string;
}
