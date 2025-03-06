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
  screen_sizes: {
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
  video_signal_format: {
    name: "Формат видеосигнала",
    option: [{ value: null, label: "" }],
  },
  wi_fi: {
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
  record_photo: {
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
  writing_video: {
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
  support_sd_card: {
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
  touch_screen: {
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
  management_buttons: {
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
  movement_detector_record: {
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
  the_function_of_the_square: {
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
  type_of_intercom: {
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
  the_number_of_monitors_in_the_max_system: {
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
  the_number_of_video_cameras_in_the_max_system: {
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
  the_number_of_calling_panels_in_the_max_system: {
    name: "Макс количество вызывных панелей в системе",
    option: [
      {
        value: 2,
        label: "2",
      },
    ],
  },
  support_full_hd: {
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
  conjugation_with_an_access_intercom: {
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
  the_presence_of_hook_exit: {
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
  loading_your_melody_to_call: {
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

  power: {
    name: "Питание",
    option: [
      {
        value: 220,
        label: "220В",
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
