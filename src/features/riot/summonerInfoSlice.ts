import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getSummonerInfo from "api/getSummonerInfo";

export interface Summoner {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

interface summonerState {
  summonerData: Summoner;
  loading: "idle" | "pending";
  error?: string;
}

const initialState: summonerState = {
  summonerData: {
    accountId: "",
    id: "",
    name: "",
    profileIconId: 0,
    puuid: "",
    revisionDate: 0,
    summonerLevel: 0,
  },
  loading: "idle",
};

export const summonerInfoSlice = createSlice({
  name: "sumonnerInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSummonerInfo.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        getSummonerInfo.fulfilled,
        (state, { payload }: PayloadAction<Summoner>) => {
          state.loading = "idle";
          state.summonerData = payload;
        }
      )
      .addCase(getSummonerInfo.rejected, (state, { error }) => {
        state.loading = "idle";
        state.error = error.message;
      });
  },
});

export default summonerInfoSlice.reducer;
