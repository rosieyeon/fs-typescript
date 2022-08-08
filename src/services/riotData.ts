import { Summoner } from 'features/riot/summonerInfoSlice';

export const summonerInfoData = (data: Summoner) => {
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

export interface SummonerTierDto {
  freshBlood: boolean;
  hotStreak: boolean;
  inactive: boolean;
  leagueId: string;
  leaguePoints: number;
  losses: number;
  queueType: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  tier: string;
  veteran: boolean;
  wins: number;
}

export const summonerTierData = (data: SummonerTierDto[]) => {
  return data.map((item: SummonerTierDto) => {
    return {
      queueType: item.queueType,
      tier: item.tier,
      rank: item.rank,
      wins: item.wins,
      losses: item.losses,
      leaguePoints: item.leaguePoints,
      leagueId: item.leagueId,
    };
  });
};
