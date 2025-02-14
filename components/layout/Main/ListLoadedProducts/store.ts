import { create, StateCreator } from "zustand";

interface IHideListLoaded {
  hide: boolean;
  updateHide: (newHide: boolean) => void;
}

const createHideListLoaded: StateCreator<IHideListLoaded> = (set) => ({
  hide: false,
  updateHide: (newHide) => set({ hide: newHide }),
});

export const useListLoadedProducts = create<IHideListLoaded>()((...state) => ({
  ...createHideListLoaded(...state),
}));
