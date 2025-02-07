export interface IMonitor {
  manufacturer: IManufacturer[];
  screenSizes: IScreenSize[];
  wiFi: IWiFi[];
  recordPhoto: IRecordPhoto[];
  writingVideo: IWritingVideo[];
  supportSDCard: ISupportSDCard[];
  touchScreen: ITouchScreen[];
  managementButtons: IManagementButtons[];
  movementDetectorRecord: IMovementDetectorRecord[];
  theFunctionOfTheSquare: ITheFunctionOfTheSquare[];
  typeOfIntercom: ITypeOfIntercom[];
  theNumberOfMonitorsInTheMaxSystem: ITheNumberOfMonitorsInTheMaxSystem[];
  theNumberOfVideoCamerasInTheMaxSystem: ITheNumberOfVideoCamerasInTheMaxSystem[];
  theNumberOfCallingPanelsInTheMaxSystem: ITheNumberOfCallingPanelsInTheMaxSystem[];
  supportFullHD: ISupportFullHD[];
  conjugationWithAnAccessIntercom: IConjugationWithAnAccessIntercom[];
  thePresenceOfHOOKExit: IThePresenceOfHOOKExit[];
  loadingYourMelodyToCall: ILoadingYourMelodyToCall[];
  videoSignalFormat: IVideoSignalFormat[];
  power: IPower[];
  consumption: IConsumption[];
  temperature: ITemperature[];
}

// Производитель
interface IManufacturer {
  value: string;
  label: string;
}
//Размер экрана
interface IScreenSize {
  value: number;
  label: string;
}
//Wi-fi
interface IWiFi {
  value: boolean;
  label: string;
}
//запись фото
interface IRecordPhoto {
  value: boolean;
  label: string;
}
//запись видео
interface IWritingVideo {
  value: boolean;
  label: string;
}
//поддержка SD-карты
interface ISupportSDCard {
  value: boolean | number;
  label: string;
}
// Сенсорный экран
interface ITouchScreen {
  value: boolean;
  label: string;
}
// кнопки управления
interface IManagementButtons {
  value: string;
  label: string;
}
// запись по детектору движения
interface IMovementDetectorRecord {
  value: boolean;
  label: string;
}
// функция квадратора
interface ITheFunctionOfTheSquare {
  value: boolean;
  label: string;
}
// тип интерфейса
interface ITypeOfIntercom {
  value: string;
  label: string;
}
// макс количество мониторов в системе
interface ITheNumberOfMonitorsInTheMaxSystem {
  value: number;
  label: string;
}
// макс количество видеокамер в системе
interface ITheNumberOfVideoCamerasInTheMaxSystem {
  value: number;
  label: string;
}
// макс количество вызывных панелей в системе
interface ITheNumberOfCallingPanelsInTheMaxSystem {
  value: number;
  label: string;
}
// поддержка Full HD
interface ISupportFullHD {
  value: boolean;
  label: string;
}
// Возможность сопряжения с подъездным домофоном
interface IConjugationWithAnAccessIntercom {
  value: boolean;
  label: string;
}
// Наличие HOOK выхода
interface IThePresenceOfHOOKExit {
  value: boolean;
  label: string;
}
// Загрузка своей мелодии на звонок
interface ILoadingYourMelodyToCall {
  value: boolean;
  label: string;
}
// Формат видеосигнала
interface IVideoSignalFormat {
  value: string;
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
