import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getSummonerTier from "api/getSummonerTier";

interface SummonerTier {
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
    builder.addCase(
      getSummonerTier.fulfilled,
      (state, { payload }: PayloadAction<SummonerTier[]>) => {
        state.loading = "idle";
        state.tierData = payload;
      }
    );
  },
});

export default summonerTierSlice.reducer;
