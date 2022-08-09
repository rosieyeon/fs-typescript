import axios from 'axios';
import matchData from 'services/riot/matchData';
import { summonerInfoData, summonerTierData } from 'services/riot/summonerData';

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

export const getSummonerById = async (summonerId: string) => {
  const response = await riotAPI.get(`/summoner/v4/summoners/${summonerId}`);
  return summonerInfoData(response.data);
};

export const getTierById = async (summonerId: string) => {
  const response = await riotAPI.get(
    `/league/v4/entries/by-summoner/${summonerId}`
  );
  return summonerTierData(response.data);
};

export const getMatchId = async (puuId: string) => {
  const matchIdsResult = await riotMatchAPI.get(
    `/match/v5/matches/by-puuid/${puuId}/ids`,
    {
      params: {
        count: 15,
      },
    }
  );
  return matchIdsResult;
};

export const getMatchDetail = async (matchId: string) => {
  const response = await riotMatchAPI.get(`match/v5/matches/${matchId}`);
  return matchData(response.data.info);
};
