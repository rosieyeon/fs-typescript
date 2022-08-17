import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { matchParticipants } from './matchDetailSlice';

interface SelectedMatch {
  match: matchParticipants[];
}

const initialState: SelectedMatch = {
  match: [],
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
