import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getSummonerTier from "api/getSummonerTier";

export interface SummonerTier {
  queueType: string;
  tier: string;
  rank: string;
  wins: number;
  losses: number;
  leaguePoints: number;
  leagueId: string;
}

interface SummonerTierState {
  tierData: SummonerTier[];
  loading: "idle" | "pending";
  error?: string;
}

const initialState: SummonerTierState = {
  tierData: [],
  loading: "idle",
};

export const summonerTierSlice = createSlice({
  name: "summonerTier",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSummonerTier.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        getSummonerTier.fulfilled,
        (state, { payload }: PayloadAction<SummonerTier[]>) => {
          state.loading = "idle";
          state.tierData = payload;
        }
      )
      .addCase(getSummonerTier.rejected, (state, { error }) => {
        state.loading = "idle";
        state.error = error.message;
      });
  },
});

export default summonerTierSlice.reducer;
