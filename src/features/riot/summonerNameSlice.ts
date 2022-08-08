import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  player: string;
  name: string;
  id: string;
}

interface PlayerState {
  user: User;
}

const initialState: PlayerState = {
  user: {
    player: '',
    name: '',
    id: '',
  },
};

export const summonerNameSlice = createSlice({
  name: 'summonerName',
  initialState,
  reducers: {
    getSummonerName: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
  },
});

export const { getSummonerName } = summonerNameSlice.actions;
export default summonerNameSlice.reducer;
