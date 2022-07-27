import { configureStore } from "@reduxjs/toolkit";
import { summonerInfoSlice } from "features/summonersList/summonerInfoSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    summonerInfo: summonerInfoSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
