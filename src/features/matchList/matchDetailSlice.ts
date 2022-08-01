import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getMatchDetails from "api/getMatchDetails";

export interface matchData {
  gameDuration: number;
  gameEndTimestamp: number;
  participants: matchParticipants[];
  teams: Teams[];
  // participantsId: [];
}

export interface Teams {
  bans: [];
  objectives: TeamObjectives;
  teamId: number;
  win: boolean;
}

export interface TeamObjectives {
  baron: ObjectiveData;
  champion: ObjectiveData;
  dragon: ObjectiveData;
  inhibitor: ObjectiveData;
  riftHerald: ObjectiveData;
  tower: ObjectiveData;
}

export interface ObjectiveData {
  first: boolean;
  kills: number;
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
    gameEndTimestamp: 0,
    participants: [],
    teams: [],
    // participantsId: [],
  },
  loading: "idle",
};

export const matchDetailSlice = createSlice({
  name: "matchDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMatchDetails.pending, (state) => {
        state.loading = "pending";
        // console.log("pending");
      })
      .addCase(
        getMatchDetails.fulfilled,
        (state, { payload }: PayloadAction<matchData>) => {
          state.loading = "idle";
          // console.log(payload);
          state.matchDetail = payload;
        }
      )
      .addCase(getMatchDetails.rejected, (state, { error }) => {
        state.loading = "idle";
        state.error = error.message;
        // console.log("error");
      });
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getMatchDetails.fulfilled, (state, { payload }: PayloadAction<matchData>) => {
  //     state.loading = "idle"
  //     console.log(payload)
  //   })
  // }
});

export default matchDetailSlice.reducer;
