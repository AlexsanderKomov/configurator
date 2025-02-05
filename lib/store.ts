import { create, StateCreator } from "zustand";

interface TypeSlice {
  type: string;
  updateType: (newType: string) => void;
}

interface TypeSystemSlice {
  typeSystem: { type: string; label: string };
  updateTypeSystem: (type: string, label: string) => void;
}

const createTypeSlice: StateCreator<TypeSlice> = (set) => ({
  type: "monitor",
  updateType: (newType) => set({ type: newType }),
});

const createTypeSystemSlice: StateCreator<TypeSystemSlice> = (set) => ({
  typeSystem: { type: "skirt", label: "СКУД" },
  updateTypeSystem: (type, label) => set({ typeSystem: { type, label } }),
});

export const useTypeStore = create<TypeSlice & TypeSystemSlice>()(
  (...state) => ({
    ...createTypeSlice(...state),
    ...createTypeSystemSlice(...state),
  })
);
