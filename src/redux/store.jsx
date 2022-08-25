import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { baseSlice } from "./slice";

export const rootReducer = combineReducers({
  [baseSlice.reducerPath]: baseSlice.reducer,
});

export const store = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseSlice.middleware),
    preloadedState,
  });
