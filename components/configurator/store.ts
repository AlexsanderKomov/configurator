import { create, StateCreator } from "zustand";

export interface ITypeEquipmentSlice {
  typeEquipment: string;
  updateTypeEquipment: (newTypeEquipment: string) => void;
}

export interface IStageSlice {
  stage: number;
  stageForward: () => void;
  stageBack: () => void;
  updateStage: (newStage: number) => void;
}

interface IRadioStateSlice {
  selectedOption: string; // Выбранный вариант
  setSelectedOption: (option: string) => void; // Функция для выбора варианта
}

interface IDataSlice {
  data: IData[];
  updateData: (newData: IData[]) => void;
}

export interface IData {
  [x: string]: string | boolean;
  manufacturer: string;
  video_signal_format: string;
  name: string;
  image: string;
}

interface ISelectedValue {
  manufacturer: string;
  video_signal_format: string;
}

interface IFilterValues {
  selectedValue: ISelectedValue;
  updateSelectedValue: (newValue: ISelectedValue) => void;
  resetValue: () => void;
}

type StoreSlise = ITypeEquipmentSlice &
  IStageSlice &
  IRadioStateSlice &
  IDataSlice &
  IFilterValues;

const createTypeEquipmentSlice: StateCreator<ITypeEquipmentSlice> = (set) => ({
  typeEquipment: "",
  updateTypeEquipment: (newTypeEquipment) =>
    set({ typeEquipment: newTypeEquipment }),
});

const createStageSlice: StateCreator<IStageSlice> = (set, get) => ({
  stage: 1,
  stageForward: () => {
    const currentStage = get().stage;
    set({ stage: currentStage + 1 });
  },
  stageBack: () => {
    const currentStage = get().stage;
    set({ stage: currentStage - 1 });
  },
  updateStage: (newStage) => set({ stage: newStage }),
});

const createRadioStoreSlice: StateCreator<IRadioStateSlice> = (set) => ({
  selectedOption: "individually", // По умолчанию ничего не выбрано
  setSelectedOption: (option) => set({ selectedOption: option }),
});

const createDataSlice: StateCreator<IDataSlice> = (set) => ({
  data: [],
  updateData: (newData) => set({ data: newData }),
});

const SELECTED_VALUE_DEFAULT = { manufacturer: "", video_signal_format: "" };

const createFilteredValue: StateCreator<IFilterValues> = (set) => ({
  selectedValue: SELECTED_VALUE_DEFAULT,
  updateSelectedValue: (newValue) => {
    set({ selectedValue: newValue });
  },
  resetValue: () => set({ selectedValue: SELECTED_VALUE_DEFAULT }),
});

export const useConfigStore = create<StoreSlise>()((...state) => ({
  ...createTypeEquipmentSlice(...state),
  ...createStageSlice(...state),
  ...createRadioStoreSlice(...state),
  ...createDataSlice(...state),
  ...createFilteredValue(...state),
}));
