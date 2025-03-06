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

interface IRadioState {
  selectedOption: string; // Выбранный вариант
  setSelectedOption: (option: string) => void; // Функция для выбора варианта
}

type StoreSlise = ITypeEquipmentSlice & IStageSlice & IRadioState;

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

export const createRadioStoreSlice: StateCreator<IRadioState> = (set) => ({
  selectedOption: "individually", // По умолчанию ничего не выбрано
  setSelectedOption: (option) => set({ selectedOption: option }),
});

export const useConfigStore = create<StoreSlise>()((...state) => ({
  ...createTypeEquipmentSlice(...state),
  ...createStageSlice(...state),
  ...createRadioStoreSlice(...state),
}));
