import youtube from "services/youtube";
import { Youtube } from "store/store.types";
import React from "react";

export const YoutubeList = async (query: string) => {
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
    // return <>{response.data.items}</>;
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
    return error;
  }
};
