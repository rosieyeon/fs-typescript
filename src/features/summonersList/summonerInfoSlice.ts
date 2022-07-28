import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import riot from "../../services/riot";
// import { Summoner } from "../../store/store.types";

export interface Summoner {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

interface summonerListState {
  summonerList: {
    accountId: string;
    id: string;
    name: string;
    profileIconId: number;
    puuid: string;
    revisionDate: number;
    summonerLevel: number;
  };
}

const initialState: summonerListState = {
  summonerList: {
    accountId: "",
    id: "",
    name: "",
    profileIconId: 0,
    puuid: "",
    revisionDate: 0,
    summonerLevel: 0,
  },
};

export const getSummonerInfo = createAsyncThunk(
  "sumonnerInfo/getSummonerInfo",
  async (summonerName: string, { rejectWithValue }) => {
    try {
      const response = await riot.get(
        `/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
      );
      console.log(response);
      return response.data.map((item: Summoner) => {
        return {
          id: item.id,
          accountId: item.accountId,
          puuid: item.puuid,
          name: item.name,
          profileIconId: item.profileIconId,
          revisionDate: item.revisionDate,
          summonerLevel: item.summonerLevel,
        };
      });
      // return {
      //   id: response.data.id,
      //   accountId: response.data.accountId,
      //   puuid: response.data.puuid,
      //   name: response.data.name,
      //   profileIconId: response.data.profileIconId,
      //   revisionDate: response.data.revisionDate,
      //   summonerLevel: response.data.summonerLevel,
      // };
    } catch (error) {
      return rejectWithValue("Fail to load response.");
    }
  }
);

// export const getSummonerInfo: {
//   accountId: string;
//   id: string;
//   name: string;
//   profileIconId: number;
//   puuid: string;
//   revisionDate: number;
//   summonerLevel: number;
// } = async (summonerName: string) => {
//   try {
//     const response = await riot.get(
//       `/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
//     );
//     console.log(response);
//     return {
//       accountId: "h-W1vEur0TFcEwRtYFikJCFnAjf5JBeRapGMTVouwEu0",
//       id: "3QqOtmyIh_H4nRILE2dBET7Q7NI3CmXCQunZKdhwXZylbQ",
//       name: "Hide on bush",
//       profileIconId: 6,
//       puuid:
//         "WxDywEVY1iPCev5bALcGJf7XPiJ49IMyCPmz2ktA9WtBezKTJl3MlgWg2wf2fth2D-wOjItm1zaOqQ",
//       revisionDate: 1658862920000,
//       summonerLevel: 590,
//       // id: response.data.id,
//       // accountId: response.data.accountId,
//       // puuid: response.data.puuid,
//       // name: response.data.name,
//       // profileIconId: response.data.profileIconId,
//       // revisionDate: response.data.revisionDate,
//       // summonerLevel: response.data.summonerLevel,
//     };
//   } catch (error) {
//     return;
//   }
// };

export const summonerInfoSlice = createSlice({
  name: "sumonnerInfo",
  initialState,
  reducers: {
    getSummoner: (state, { payload }: PayloadAction<Summoner>) => {
      state.summonerList = payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(
  //     getSummonerInfo.fulfilled,
  //     (state, { payload }: PayloadAction<Summoner[]>) => {
  //       state.summonerList = payload;
  //     }
  //   );
  // },
});

export const { getSummoner } = summonerInfoSlice.actions;
export default summonerInfoSlice.reducer;
