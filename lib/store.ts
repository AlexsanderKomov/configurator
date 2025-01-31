import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => configureStore({ reducer: {} });

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore["dispatch"];
