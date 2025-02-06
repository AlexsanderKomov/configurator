import { create, StateCreator } from "zustand";

interface TypeSystemSlice {
  typeSystem: string;
  updateTypeSystem: (newTtypeSistem: string) => void;
}

interface StageSlice {
  stage: number;
  updateStage: (newStage: number) => void;
}

const createTypeSystemSlice: StateCreator<TypeSystemSlice> = (set) => ({
  typeSystem: "skirt",
  updateTypeSystem: (newTtypeSistem) => set({ typeSystem: newTtypeSistem }),
});

const createStageSlice: StateCreator<StageSlice> = (set) => ({
  stage: 1,
  updateStage: (newStage) => set({ stage: newStage }),
});

export const useTypeStore = create<TypeSystemSlice & StageSlice>()(
  (...state) => ({
    ...createTypeSystemSlice(...state),
    ...createStageSlice(...state),
  })
);
