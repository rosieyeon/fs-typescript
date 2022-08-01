import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getMatchDetails from "api/getMatchDetails";
import getMatchIds from "api/getMatchIds";

// interface MatchIds<Arrary>

interface MatchIdState {
  matchIds: [];
  loading: "idle" | "pending";
  error?: string;
}

const initialState: MatchIdState = {
  matchIds: [],
  loading: "idle",
};

export const matchIdSlice = createSlice({
  name: "matchId",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMatchIds.pending, (state) => {
        state.loading = "pending";
        console.log("pending");
      })
      .addCase(
        getMatchIds.fulfilled,
        (state, { payload }: PayloadAction<[]>) => {
          state.loading = "idle";
          console.log(payload);
          state.matchIds = payload;
        }
      )
      .addCase(getMatchDetails.rejected, (state, { error }) => {
        state.loading = "idle";
        state.error = error.message;
        console.log("error");
      });
  },
});

export default matchIdSlice.reducer;
