import youtube from "services/youtube";
import { Youtube, YoutubeItem } from "store/store.types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import getYoutubeList from "api/getYoutubeList";

interface youtubeListState {
  youtubeList: YoutubeItem[];
  loading: "idle" | "pending";
  error?: string;
}

const initialState: youtubeListState = {
  youtubeList: [],
  loading: "idle",
};

// export const getYoutubeList = createAsyncThunk(
//   "youtube/getYoutubeList",
//   async (query: string, { rejectWithValue }) => {
//     try {
//       const response = await youtube.get("/search", {
//         params: {
//           part: "snippet",
//           q: query,
//           masResults: 2,
//           regionCode: "KR",
//         },
//       });
//       return response.data.items.map((item: Youtube) => {
//         return {
//           id: item.id,
//           title: item.snippet.title,
//           channelTitle: item.snippet.channelTitle,
//           thumbnail: item.snippet.thumbnails.medium.url,
//         };
//       });
//     } catch (error) {
//       return rejectWithValue("error!");
//     }
//   }
// );

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
        (state, { payload }: PayloadAction<YoutubeItem[]>) => {
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
