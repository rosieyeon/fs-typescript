import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import getMatchData from 'api/getMatchData';
import { getMatchId } from 'api/riotAPI';

// TODO 대문자로 eslint?
export interface MatchData {
  gameDuration: number;
  gameEndTimestamp: number;
  participants: matchParticipants[];
  teams: Teams[];
  // participantsId: [];
}

export interface Teams {
  bans: string[];
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
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageTaken: number;
  goldEarned: number;
}

interface matchDetailState {
  matchDetail: MatchData[];
  loading: 'idle' | 'pending';
  error?: string;
}

const initialState: matchDetailState = {
  matchDetail: [],
  // matchDetail: {
  //   gameDuration: 0,
  //   gameEndTimestamp: 0,
  //   participants: [],
  //   teams: [],
  //   // participantsId: [],
  // },
  loading: 'idle',
};

const getMatchData = createAsyncThunk(
  'matchData/getMatchData',
  async (puuId: string, { rejectWithValue }) => {
    try {
      const PromiseArrayResult = (await getMatchId(puuId)).data.map(
        // eslint-disable-next-line array-callback-return
        (matchId: string) => {
          return getMatchData(matchId);
        }
      );
      return Promise.all(PromiseArrayResult);
    } catch (error) {
      return rejectWithValue('error!');
    }
  }
);

export const matchDetailSlice = createSlice({
  name: 'matchDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMatchData.pending, (state) => {
        state.loading = 'pending';
        // console.log("pending");
      })
      .addCase(
        getMatchData.fulfilled,
        (state, { payload }: PayloadAction<MatchData[]>) => {
          state.loading = 'idle';
          // console.log(payload);
          state.matchDetail = payload;
        }
      )
      .addCase(getMatchData.rejected, (state, { error }) => {
        state.loading = 'idle';
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
