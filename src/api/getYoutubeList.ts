import { createAsyncThunk } from "@reduxjs/toolkit";
import youtube from "services/youtube";
import { Youtube } from "store/store.types";

const getYoutubeList = createAsyncThunk(
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
      return response.data.items.map((item: Youtube) => {
        return {
          id: item.id,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
        };
      });
    } catch (error) {
      return rejectWithValue("error!");
    }
  }
);

export default getYoutubeList;
