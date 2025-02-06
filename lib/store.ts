import { create, StateCreator } from "zustand";

export interface ITypeSystemSlice {
  typeSystem: string;
  updateTypeSystem: (newTypeSistem: string) => void;
}

interface IStageSlice {
  stage: number;
  updateStage: (newStage: number) => void;
}

const createTypeSystemSlice: StateCreator<ITypeSystemSlice> = (set) => ({
  typeSystem: "skirt",
  updateTypeSystem: (newTypeSistem) => set({ typeSystem: newTypeSistem }),
});

const createStageSlice: StateCreator<IStageSlice> = (set) => ({
  stage: 1,
  updateStage: (newStage) => set({ stage: newStage }),
});

export const useTypeStore = create<ITypeSystemSlice & IStageSlice>()(
  (...state) => ({
    ...createTypeSystemSlice(...state),
    ...createStageSlice(...state),
  })
);
