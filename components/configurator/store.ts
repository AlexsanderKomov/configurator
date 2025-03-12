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
type StoreSlise = ITypeEquipmentSlice &
  IStageSlice &
  IRadioStateSlice &
  IDataSlice;

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

export const useConfigStore = create<StoreSlise>()((...state) => ({
  ...createTypeEquipmentSlice(...state),
  ...createStageSlice(...state),
  ...createRadioStoreSlice(...state),
  ...createDataSlice(...state),
}));
