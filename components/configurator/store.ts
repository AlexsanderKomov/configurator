import { Stage } from "@/lib/enumStage";
import { create } from "zustand";

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

export interface ILocalStorageData {
  item: IData;
  stage: Stage;
}

interface IConfigStore {
  localStorageData: ILocalStorageData[];
  data: IData[];
  stage: number;
  selectedOption: string;
  selectedValue: ISelectedValue | null;
  history: { selectedOption: string; selectedValue: ISelectedValue | null }[];
  updateLocalStorageData: (newData: ILocalStorageData[]) => void;
  resetLocalStorageData: () => void;
  updateData: (newData: IData[]) => void;
  updateStage: (newStage: number) => void;
  stageForward: () => void;
  stageBack: () => void;
  resetValue: () => void;
  updateSelectedOption: (option: string) => void;
  updateSelectedValue: (value: ISelectedValue) => void;
}

export const useConfigStore = create<IConfigStore>((set, get) => ({
  localStorageData: [],
  data: [],
  stage: Stage.one,
  selectedOption: "individually",
  selectedValue: null,
  history: [],

  updateLocalStorageData: (newData) => set({ localStorageData: newData }),

  resetLocalStorageData: () => set({ localStorageData: [] }),

  updateData: (newData) => set({ data: newData }),

  updateStage: (newStage) => set({ stage: newStage }),

  stageForward: () => {
    const currentState = {
      selectedOption: get().selectedOption,
      selectedValue: get().selectedValue,
    };
    set((state) => ({
      stage: state.stage + 1,
      history: [...state.history, currentState], // Сохраняем текущее состояние в историю
    }));
  },
  stageBack: () => {
    set((state) => {
      if (state.history.length > 0) {
        const previousState = state.history[state.history.length - 1]; // Берем последнее состояние из истории
        return {
          stage: state.stage - 1,
          selectedOption: previousState.selectedOption,
          selectedValue: previousState.selectedValue,
          history: state.history.slice(0, -1), // Удаляем последнее состояние из истории
        };
      }
      return state;
    });
  },
  resetValue: () =>
    set({ selectedOption: "individually", selectedValue: null }),

  updateSelectedOption: (option) => set({ selectedOption: option }),

  updateSelectedValue: (value) => set({ selectedValue: value }),
}));
