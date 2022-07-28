import { configureStore } from "@reduxjs/toolkit";
import { RootState } from "app/rootReducer";
import { summonerInfoSlice } from "features/summonersList/summonerInfoSlice";
import { youtubeListSlice } from "features/youtubeList/youtubeListSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    summonerInfo: summonerInfoSlice.reducer,
    youtubeList: youtubeListSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
