import axios from 'axios';
import matchData from 'services/riot/matchData';
import { summonerInfoData, summonerTierData } from 'services/riot/summonerData';
import { goldFrameData } from 'services/riot/timelineData';

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

export const ddragonAPI = axios.create({
  baseURL:
    'https://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion',
});

export const getSummonerById = async (summonerId: string) => {
  const response = await riotAPI.get(`/summoner/v4/summoners/${summonerId}`);
  // console.log(response);
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
  // console.log(matchIdsResult);
  return matchIdsResult;
};

export const getMatchDetail = async (matchId: string) => {
  const response = await riotMatchAPI.get(`match/v5/matches/${matchId}`);
  console.log(response);
  return matchData(response.data);
};

export const getBuildDetail = async (matchId: string) => {
  const response = await riotMatchAPI.get(
    `match/v5/matches/${matchId}/timeline`
  );
  console.log(response);
  return goldFrameData(response.data.info.frames);
};

export const getChampionDetails = async (name: string) => {
  const response = await ddragonAPI.get(`/${name}.json`);
  console.log(response.data.data[`${name}`]);
};
getChampionDetails('Ahri');
