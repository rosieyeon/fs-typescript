import { createAsyncThunk } from "@reduxjs/toolkit";
import youtube from "services/youtubeAPI";

export interface YoutubeDto {
  kind: string;
  etag: string;
  id: YoutubeSearchResponseId;
  snippet: YoutubeSnippet;
  contentDetails: YoutubeContentDetails;
}

interface YoutubeSearchResponseId {
  kind: string;
  videoId: string;
}

interface YoutubeSnippet {
  publishedAt: string;
  publishTime?: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeSnippetThumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: YoutubeSnippetLocalized;
}

interface YoutubeSnippetLocalized {
  title: string;
  description: string;
}

interface YoutubeSnippetThumbnails {
  default: YoutubeSnippetThumbnail;
  medium: YoutubeSnippetThumbnail;
  high: YoutubeSnippetThumbnail;
  standard: YoutubeSnippetThumbnail;
  maxres: YoutubeSnippetThumbnail;
}

interface YoutubeSnippetThumbnail {
  url: string;
  width: number;
  height: number;
}

interface YoutubeContentDetails {
  duration: string;
}

const getYoutubeList = createAsyncThunk(
  "youtube/getYoutubeList",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          part: "snippet",
          type: "video",
          q: query,
          maxResults: 12,
          regionCode: "KR",
          order: "date",
          channelId: "UCJprx3bX49vNl6Bcw01Cwfg",
        },
      });
      // console.log(response);
      return response.data.items.map((item: YoutubeDto) => {
        return {
          id: item.id.videoId,
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
