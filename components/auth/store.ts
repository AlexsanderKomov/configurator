import { create, StateCreator } from "zustand";

export interface IUser {
  role: string;
  first_name: string;
  last_name: string;
  company: string;
  phone_number: string;
}

interface IProfileUser {
  user: IUser;
  updateUser: (newuser: IUser) => void;
  resetUser: () => void;
}

interface IProfileRole {
  role: string;
  updateRole: (newRole: string) => void;
  resetRole: () => void;
}

const DEFAULT_VALUE = {
  role: "",
  first_name: "",
  last_name: "",
  company: "",
  phone_number: "",
};

const createUserSlice: StateCreator<IProfileUser> = (set) => ({
  user: DEFAULT_VALUE,
  updateUser: (newUser) => set(() => ({ user: newUser })),
  resetUser: () =>
    set({
      user: DEFAULT_VALUE,
    }),
});

const createRoleSlice: StateCreator<IProfileRole> = (set) => ({
  role: "",
  updateRole: (newRole) => set(() => ({ role: newRole })),
  resetRole: () => set({ role: "" }),
});

export const useProfile = create<IProfileRole & IProfileUser>()((...state) => ({
  ...createRoleSlice(...state),
  ...createUserSlice(...state),
}));
