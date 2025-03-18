import { Stage } from "@/lib/enumStage";
import { create, StateCreator } from "zustand";

export interface IStageSlice {
  stage: number;
  stageForward: () => void;
  stageBack: () => void;
  updateStage: (newStage: number) => void;
}

interface IRadioStateSlice {
  selectedOption: string; // Выбранный вариант
  updateSelectedOption: (option: string) => void; // Функция для выбора варианта
  getPreviousSelectedOption: () => string;
  previousSelectedOption: string;
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

export interface ISelectedValue {
  manufacturer?: string;
  video_signal_format?: string;
  type_lock?: string;
}

interface IFilterValues {
  selectedValue: ISelectedValue;
  previousSelectedValue: ISelectedValue;
  updateSelectedValue: (newValue: ISelectedValue) => void;
  getPreviousSelectedValue: () => ISelectedValue;
  resetValue: () => void;
}

interface ILocalStorageDataSlice {
  localStorageData: IData[];
  updateLocalStorageData: (newData: IData[]) => void;
  resetLocalStorageData: () => void;
}

type StoreSlise = IStageSlice &
  IRadioStateSlice &
  IDataSlice &
  IFilterValues &
  ILocalStorageDataSlice;

const createStageSlice: StateCreator<IStageSlice> = (set, get) => ({
  stage: Stage.one,
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

const createRadioStoreSlice: StateCreator<IRadioStateSlice> = (set, get) => ({
  selectedOption: "individually", // По умолчанию ничего не выбрано
  previousSelectedOption: "",
  updateSelectedOption: (option) =>
    set((state) => ({
      previousSelectedOption: state.selectedOption,
      selectedOption: option,
    })),
  getPreviousSelectedOption: () => get().previousSelectedOption,
});

const createDataSlice: StateCreator<IDataSlice> = (set) => ({
  data: [],
  updateData: (newData) => set({ data: newData }),
});

const SELECTED_VALUE_DEFAULT = { manufacturer: "", video_signal_format: "" };

const createFilteredValue: StateCreator<IFilterValues> = (set, get) => ({
  selectedValue: SELECTED_VALUE_DEFAULT,
  previousSelectedValue: "",
  updateSelectedValue: (newValue) => {
    set((state) => ({
      previousSelectedValue: state.selectedValue,
      selectedValue: newValue,
    }));
  },
  getPreviousSelectedValue: () => get().previousSelectedValue,
  resetValue: () => set({ selectedValue: SELECTED_VALUE_DEFAULT }),
});

const createLocalStorageDataSlice: StateCreator<ILocalStorageDataSlice> = (
  set
) => ({
  localStorageData: [],
  updateLocalStorageData: (newData) => set({ localStorageData: newData }),
  resetLocalStorageData: () => set({ localStorageData: [] }),
});

export const useConfigStore = create<StoreSlise>()((...state) => ({
  ...createStageSlice(...state),
  ...createRadioStoreSlice(...state),
  ...createDataSlice(...state),
  ...createFilteredValue(...state),
  ...createLocalStorageDataSlice(...state),
}));
