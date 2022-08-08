import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSummonerByName } from 'services/summonerInfoData';

export interface Summoner {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

interface SummonerState {
  summonerData: Summoner;
  loading: 'idle' | 'pending';
  error?: string;
}

const initialState: SummonerState = {
  summonerData: {
    accountId: '',
    id: '',
    name: '',
    profileIconId: 0,
    puuid: '',
    revisionDate: 0,
    summonerLevel: 0,
  },
  loading: 'idle',
};

export const getSummonerInfo = createAsyncThunk(
  'sumonnerInfo/getSummonerInfo',
  async (summonerName: string, { rejectWithValue }) => {
    try {
      return getSummonerByName(summonerName);
    } catch (error) {
      return rejectWithValue('Fail to load response.');
    }
  }
);

export const summonerInfoSlice = createSlice({
  name: 'sumonnerInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSummonerInfo.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(
        getSummonerInfo.fulfilled,
        (state, { payload }: PayloadAction<Summoner>) => {
          state.loading = 'idle';
          state.summonerData = payload;
        }
      )
      .addCase(getSummonerInfo.rejected, (state, { error }) => {
        state.loading = 'idle';
        state.error = error.message;
      });
  },
});

export default summonerInfoSlice.reducer;
