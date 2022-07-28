import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getYoutubeList from "api/getYoutubeList";

export interface YoutubeData {
  id: string;
  thumbnail: string;
  title: string;
  channelTitle: string;
}

interface youtubeListState {
  youtubeList: YoutubeData[];
  loading: "idle" | "pending";
  error?: string;
}

const initialState: youtubeListState = {
  youtubeList: [],
  loading: "idle",
};

export const youtubeListSlice = createSlice({
  name: "youtubeList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getYoutubeList.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        getYoutubeList.fulfilled,
        (state, { payload }: PayloadAction<YoutubeData[]>) => {
          state.loading = "idle";
          console.log(payload);
          state.youtubeList = payload;
        }
      )
      .addCase(getYoutubeList.rejected, (state, { error }) => {
        state.loading = "idle";
        state.error = error.message;
      });
  },
});

export default youtubeListSlice.reducer;
