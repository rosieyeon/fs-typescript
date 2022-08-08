import axios from 'axios';
import { youtubeData } from 'services/youtube/youtubeData';

export const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});

export const getYoutubeData = async (query: string) => {
  const response = await youtubeAPI.get('/search', {
    params: {
      part: 'snippet',
      type: 'video',
      q: query,
      maxResults: 20,
      regionCode: 'KR',
      order: 'date',
      channelId: 'UCJprx3bX49vNl6Bcw01Cwfg',
    },
  });
  // console.log(response);
  return youtubeData(response.data.items);
};
