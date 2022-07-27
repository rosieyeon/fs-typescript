import youtube from "services/youtube";

export const YoutubeList = async (query: string) => {
  const response = await youtube.get("/search", {
    params: {
      part: "snippet",
      q: query,
      masResults: 12,
      regionCode: "KR",
    },
  });
  console.log(response);
};
