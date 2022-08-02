import { createAsyncThunk } from "@reduxjs/toolkit";
import riot from "services/riot";

interface SummonerTierDto {
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

const getSummonerTier = createAsyncThunk(
  "summonerInfo/getSummonerTier",
  async (summonerId: string, { rejectWithValue }) => {
    try {
      const response = await riot.get(
        `/league/v4/entries/by-summoner/${summonerId}`
      );
      return response.data.map((item: SummonerTierDto) => {
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
    } catch (error) {
      return rejectWithValue("error!");
    }
  }
);

// const getSummonerTier = async (summonerId: string) => {
//   try {
//     const response = await riot.get(
//       `/league/v4/entries/by-summoner/${summonerId}`
//     );
//     console.log(response);
//   } catch (error) {
//     error;
//   }
// };
export default getSummonerTier;
