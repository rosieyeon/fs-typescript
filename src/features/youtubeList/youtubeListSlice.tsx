import youtube from "services/youtube";
import { Youtube } from "store/store.types";
import React from "react";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface youtubeListState {
  youtubeList: Youtube[];
  keyQuery: string;
  loading: "idle" | "pending";
  error?: string;
}

const initialState: youtubeListState = {
  youtubeList: [],
  keyQuery: "",
  loading: "idle",
};

export const getYoutubeList = createAsyncThunk(
  "youtube/getYoutubeList",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          part: "snippet",
          q: query,
          masResults: 2,
          regionCode: "KR",
        },
      });
      console.log(response.data.items);
      return response.data.items.map((item: Youtube) => {
        return {
          id: item.id,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
          duration: item.contentDetails.duration,
        };
      });
    } catch (error) {
      return rejectWithValue("error!");
    }
  }
);

export const youtubeListSlice = createSlice({
  name: "youtubeList",
  initialState,
  reducers: {
    saveKeyQuery: (state, { payload }) => {
      state.keyQuery = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getYoutubeList.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        getYoutubeList.fulfilled,
        (state, { payload }: PayloadAction<Youtube[]>) => {
          state.loading = "idle";
          state.youtubeList = payload;
        }
      )
      .addCase(getYoutubeList.rejected, (state, { error }) => {
        state.loading = "idle";
        state.error = error.message;
      });
  },
});

export const { saveKeyQuery } = youtubeListSlice.actions;
export default youtubeListSlice.reducer;
