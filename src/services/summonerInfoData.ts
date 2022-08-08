import { riotAPI } from 'api/riotAPI';
import { Summoner } from 'features/riot/summonerInfoSlice';

const summonerInfoData = (data: Summoner) => {
  return {
    id: data.id,
    accountId: data.accountId,
    puuid: data.puuid,
    name: data.name,
    profileIconId: data.profileIconId,
    revisionDate: data.revisionDate,
    summonerLevel: data.summonerLevel,
  };
};

export const getSummonerByName = async (summonerName: string) => {
  const response = await riotAPI.get(
    `/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
  );
  return summonerInfoData(response.data);
};
