import { configureStore } from "@reduxjs/toolkit";
import layoutLoadingReducer from "./reducer/loading";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    loadingLayout: layoutLoadingReducer,
  },
});

export const { dispatch, getState } = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
