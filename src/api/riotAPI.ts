import axios from 'axios';
import { summonerInfoData, summonerTierData } from 'services/riotData';

export const riotAPI = axios.create({
  baseURL: 'https://kr.api.riotgames.com/lol',
  params: {
    api_key: process.env.REACT_APP_RIOT_API_KEY,
  },
});

const riotMatchAPI = axios.create({
  baseURL: 'https://asia.api.riotgames.com/lol',
  params: {
    api_key: process.env.REACT_APP_RIOT_API_KEY,
  },
});

export const getSummonerByName = async (summonerName: string) => {
  const response = await riotAPI.get(
    `/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
  );
  return summonerInfoData(response.data);
};

export const getTierById = async (summonerId: string) => {
  const response = await riotAPI.get(
    `/league/v4/entries/by-summoner/${summonerId}`
  );
  return summonerTierData(response.data);
};
