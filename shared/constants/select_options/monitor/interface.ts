export interface IMonitor {
  // Производитель
  manufacturer: {
    manufacturer: string;
    option: IOption[];
  };
  //Размер экрана
  screenSizes: {
    screenSizes: string;
    option: IOption[];
  };
  //Wi-fi
  wiFi: {
    wiFi: string;
    option: IOption[];
  };
  //запись фото
  recordPhoto: {
    recordPhoto: string;
    option: IOption[];
  };
  //запись видео
  writingVideo: {
    writingVideo: string;
    option: IOption[];
  };
  //поддержка SD-карты
  supportSDCard: {
    supportSDCard: string;
    option: IOption[];
  };
  // Сенсорный экран
  touchScreen: {
    touchScreen: string;
    option: IOption[];
  };
  // кнопки управления
  managementButtons: {
    managementButtons: string;
    option: IOption[];
  };
  // запись по детектору движения
  movementDetectorRecord: {
    movementDetectorRecord: string;
    option: IOption[];
  };
  // функция квадратора
  theFunctionOfTheSquare: {
    theFunctionOfTheSquare: string;
    option: IOption[];
  };
  // тип интерфейса
  typeOfIntercom: {
    typeOfIntercom: string;
    option: IOption[];
  };
  // макс количество мониторов в системе
  theNumberOfMonitorsInTheMaxSystem: {
    theNumberOfMonitorsInTheMaxSystem: string;
    option: IOption[];
  };
  // макс количество видеокамер в системе
  theNumberOfVideoCamerasInTheMaxSystem: {
    theNumberOfVideoCamerasInTheMaxSystem: string;
    option: IOption[];
  };
  // макс количество вызывных панелей в системе
  theNumberOfCallingPanelsInTheMaxSystem: {
    theNumberOfCallingPanelsInTheMaxSystem: string;
    option: IOption[];
  };
  // поддержка Full HD
  supportFullHD: {
    supportFullHD: string;
    option: IOption[];
  };
  // Возможность сопряжения с подъездным домофоном
  conjugationWithAnAccessIntercom: {
    conjugationWithAnAccessIntercom: string;
    option: IOption[];
  };
  // Наличие HOOK выхода
  thePresenceOfHOOKExit: {
    thePresenceOfHOOKExit: string;
    option: IOption[];
  };
  // Загрузка своей мелодии на звонок
  loadingYourMelodyToCall: {
    loadingYourMelodyToCall: string;
    option: IOption[];
  };
  // Формат видеосигнала
  videoSignalFormat: {
    videoSignalFormat: string;
    option: IOption[];
  };
  // питание
  power: {
    power: string;
    option: IOption[];
  };
  // потребление
  consumption: {
    consumption: string;
    option: IOption[];
  };
  // рабочая температура
  temperature: {
    temperature: string;
    option: [
      {
        value: {
          min: number;
          max: number;
        };
        label: string;
      }
    ];
  };
}

// интерфейс для опций
interface IOption {
  value: string | number | boolean | null;
  label: string;
}
