import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getMatchDetails from "api/getMatchDetails";

export interface matchData {
  gameDuration: number;
  gameEndTimeStamp: number;
  participants: matchParticipants[];
  teams: [];
  participantsId: [];
}

export interface matchParticipants {
  assists: number;
  kda: string;
  champLevel: number;
  championId: number;
  championName: string;
  deaths: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  visionScore: number;
  doubleKills: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  kills: number;
  lane: string;
  participantId: number;
  pentaKills: number;
  perks1: number; // perks.styles[0].selections[0].perk
  perks2: number; // perks.styles[1].style
  win: boolean;
  puuid: string;
  summonerId: string;
  summonerName: string;
  teamId: number;
  tripleKills: number;
  cs: number; // totalMiniosKilled +neutralMiniosKilled
  // csPerMin: number // cs / duration
  spell1: number; // summoner1Id
  spell2: number; // summoner2Id
}

interface matchDetailState {
  matchDetail: matchData;
  loading: "idle" | "pending";
  error?: string;
}

const initialState: matchDetailState = {
  matchDetail: {
    gameDuration: 0,
    gameEndTimeStamp: 0,
    participants: [],
    teams: [],
    participantsId: [],
  },
  loading: "idle",
};

export const matchDetailSlice = createSlice({
  name: "matchDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getMatchDetails.fulfilled,
      (state, { payload }: PayloadAction<matchData>) => {
        state.loading = "idle";
        console.log(payload);
      }
    );
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getMatchDetails.fulfilled, (state, { payload }: PayloadAction<matchData>) => {
  //     state.loading = "idle"
  //     console.log(payload)
  //   })
  // }
});

export default matchDetailSlice.reducer;
