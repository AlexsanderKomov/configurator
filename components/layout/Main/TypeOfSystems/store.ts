import { create, StateCreator } from "zustand";

export interface ITypeSystemSlice {
  typeSystem: string;
  updateTypeSystem: (newTypeSistem: string) => void;
}

interface IStageSlice {
  stage: number;
  updateStage: (newStage: number) => void;
}

export interface ITypeNodeSlice {
  typeNode: string;
  updateTypeNode: (newTypeNode: string) => void;
}

type StoreSlise = ITypeSystemSlice & IStageSlice & ITypeNodeSlice;

const createTypeSystemSlice: StateCreator<ITypeSystemSlice> = (set) => ({
  typeSystem: "skirt",
  updateTypeSystem: (newTypeSistem) => set({ typeSystem: newTypeSistem }),
});

const createStageSlice: StateCreator<IStageSlice> = (set) => ({
  stage: 1,
  updateStage: (newStage) => set({ stage: newStage }),
});

const createTypeNodeSlice: StateCreator<ITypeNodeSlice> = (set) => ({
  typeNode: "",
  updateTypeNode: (newTypeNode) => set({ typeNode: newTypeNode }),
});

export const useTypeStore = create<StoreSlise>()((...state) => ({
  ...createTypeSystemSlice(...state),
  ...createStageSlice(...state),
  ...createTypeNodeSlice(...state),
}));
