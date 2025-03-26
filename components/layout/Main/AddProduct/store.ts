import { create, StateCreator } from "zustand";
import { IConstants } from "@/shared/constants/select_options/interface";
import { IProductData } from "@/lib/helpers/interface";

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
  data: IConstants[];
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  updateData: (newData: IConstants[]) => void;
  resetData: () => void;
}

export interface IDataEcxel {
  dataExcel: IProductData[];
  updateDataExcel: (newDataExcel: IProductData[]) => void;
}

type StoreSlise = ITypeSystemSlice &
  IStageSlice &
  ITypeNodeSlice &
  IReadExcel &
  IDataEcxel;

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
  data: [],
  loading: false, // началное состояние
  startLoading: () => set({ loading: true }), // начать загрузку
  stopLoading: () => set({ loading: false }), // закончить загрузку
  updateData: (newData) => set({ data: newData }),
  resetData: () => set({ data: [] }),
});

const createEcxcelData: StateCreator<IDataEcxel> = (set) => ({
  dataExcel: [],
  updateDataExcel: (newDataExcel) => set({ dataExcel: newDataExcel }),
});

export const useTypeStore = create<StoreSlise>()((...state) => ({
  ...createTypeSystemSlice(...state),
  ...createStageSlice(...state),
  ...createTypeNodeSlice(...state),
  ...createReadExcelSlice(...state),
  ...createEcxcelData(...state),
}));
