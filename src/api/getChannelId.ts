import youtube from "services/youtube";

const getChannelId = async () => {
  try {
    const response = await youtube.get("/channels", {
      params: {
        part: "id, snippet, brandingSettings, contentDetails, invideoPromotion, statistics, topicDetails",
      },
    });
    console.log(response);
  } catch (error) {
    return error;
  }
};

export default getChannelId;
