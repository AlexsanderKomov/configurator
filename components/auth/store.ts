import { create, StateCreator } from "zustand";

// interface IUser {
//   role: string;
//   first_name: string;
//   last_name: string;
//   company: string;
// }

interface IProfileRole {
  role: string;
  updateRole: (newRole: string) => void;
  resetRole: () => void;
}

const createRoleSlice: StateCreator<IProfileRole> = (set) => ({
  role: "",
  updateRole: (newRole) => set(() => ({ role: newRole })),
  resetRole: () => set({ role: "" }),
});

export const useProfile = create<IProfileRole>()((...state) => ({
  ...createRoleSlice(...state),
}));
