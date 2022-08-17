import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { matchParticipants } from './matchDetailSlice';

interface SelectedMatch {
  match: matchParticipants[];
}

const initialState: SelectedMatch = {
  match: [],
  // {
  //   assists: 0,
  //   kda: '',
  //   champLevel: 0,
  //   championId: 0,
  //   championName: '',
  //   deaths: 0,
  //   visionWardsBoughtInGame: 0,
  //   wardsKilled: 0,
  //   wardsPlaced: 0,
  //   visionScore: 0,
  //   doubleKills: 0,
  //   item0: 0,
  //   item1: 0,
  //   item2: 0,
  //   item3: 0,
  //   item4: 0,
  //   item5: 0,
  //   item6: 0,
  //   kills: 0,
  //   lane: '',
  //   participantId: 0,
  //   pentaKills: 0,
  //   perks1: 0, // perks.styles[0].selections[0].perk
  //   perks2: 0, // perks.styles[1].style
  //   win: false,
  //   puuid: '',
  //   summonerId: '',
  //   summonerName: '',
  //   teamId: 0,
  //   tripleKills: 0,
  //   cs: 0, // totalMiniosKilled +neutralMiniosKilled
  //   // csPerMin: number // cs / duration
  //   spell1: 0, // summoner1Id
  //   spell2: 0, // summoner2Id
  //   totalDamageDealt: 0,
  //   totalDamageDealtToChampions: 0,
  //   totalDamageTaken: 0,
  //   goldEarned: 0,
  // },
};

export const selectedMatchSlice = createSlice({
  name: 'selectedMatch',
  initialState,
  reducers: {
    setMatch: (state, { payload }: PayloadAction<matchParticipants[]>) => {
      state.match = payload;
    },
  },
});

export const { setMatch } = selectedMatchSlice.actions;
export default selectedMatchSlice.reducer;
