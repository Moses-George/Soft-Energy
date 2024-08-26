import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { formApi } from "./api/formApi";

export const store = configureStore({
  reducer: {
    [formApi.reducerPath]: formApi.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      formApi.middleware
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
