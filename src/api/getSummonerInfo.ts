import { createAsyncThunk } from "@reduxjs/toolkit";
import riot from "services/riot";

const getSummonerInfo = createAsyncThunk(
  "sumonnerInfo/getSummonerInfo",
  async (summonerName: string, { rejectWithValue }) => {
    try {
      const response = await riot.get(
        `/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
      );
      console.log(response);
      return {
        id: response.data.id,
        accountId: response.data.accountId,
        puuid: response.data.puuid,
        name: response.data.name,
        profileIconId: response.data.profileIconId,
        revisionDate: response.data.revisionDate,
        summonerLevel: response.data.summonerLevel,
      };
    } catch (error) {
      return rejectWithValue("Fail to load response.");
    }
  }
);

export default getSummonerInfo;
