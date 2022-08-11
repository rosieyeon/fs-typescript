import axios from 'axios';
import { youtubeData } from 'services/youtube/youtubeData';

export const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});

export interface YoutubeQuery {
  keyword: string;
  channelID: string;
  name: string;
  order: string;
}

export const getYoutubeData = async (query: YoutubeQuery) => {
  const response = await youtubeAPI.get('/search', {
    params: {
      part: 'snippet',
      type: 'video',
      q: query.keyword,
      maxResults: 2,
      regionCode: 'KR',
      order: query.order,
      channelId: query.channelID,
    },
  });
  // console.log(response);
  return youtubeData(response.data.items);
};
