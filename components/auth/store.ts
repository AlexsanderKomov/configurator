import { create, StateCreator } from "zustand";

interface IUser {
  role: string;
  first_name: string;
  last_name: string;
  company: string;
}

interface IProfileRole {
  user: IUser[];
  updateUser: (newRole: []) => void;
  resetUser: () => void;
}

const createRoleSlice: StateCreator<IProfileRole> = (set) => ({
  user: [],
  updateUser: (newUser) => set(() => ({ user: newUser })),
  resetUser: () => set(() => ({ user: [] })),
});

export const useProfile = create<IProfileRole>()((...state) => ({
  ...createRoleSlice(...state),
}));
