import axios from 'axios';

export const riotAPI = axios.create({
  baseURL: 'https://kr.api.riotgames.com/lol',
  params: {
    api_key: process.env.REACT_APP_RIOT_API_KEY,
  },
});

export const riotMatchAPI = axios.create({
  baseURL: 'https://asia.api.riotgames.com/lol',
  params: {
    api_key: process.env.REACT_APP_RIOT_API_KEY,
  },
});
