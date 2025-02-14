import { create, StateCreator } from "zustand";
import { IData } from "@/components/layout/Main/TypeOfSystems/components/ReadExcel/interface";

export interface ITypeSystemSlice {
  typeSystem: string;
  updateTypeSystem: (newTypeSistem: string) => void;
}

export interface IStageSlice {
  stage: number;
  updateStage: (newStage: number) => void;
}

export interface ITypeNodeSlice {
  typeNode: string;
  updateTypeNode: (newTypeNode: string) => void;
}

export interface IReadExcel {
  data: IData[];
  updateData: (newData: IData[]) => void;
}

type StoreSlise = ITypeSystemSlice & IStageSlice & ITypeNodeSlice & IReadExcel;

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

const createReadExcelSlice: StateCreator<IReadExcel> = (set) => ({
  data: [{ manufacturer: "", name: "", article: "", screenSizes: "" }],
  updateData: (newData) => set({ data: newData }),
});

export const useTypeStore = create<StoreSlise>()((...state) => ({
  ...createTypeSystemSlice(...state),
  ...createStageSlice(...state),
  ...createTypeNodeSlice(...state),
  ...createReadExcelSlice(...state),
}));
