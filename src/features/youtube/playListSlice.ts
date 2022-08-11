import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { YoutubeData } from './youtubeListSlice';

interface PlaylistState {
  playList: YoutubeData[];
}

const initialState: PlaylistState = {
  playList: [],
};

export const playListSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addVideo: (state, { payload }: PayloadAction<YoutubeData>) => {
      if (
        !current(state.playList).some((youtube) => youtube.id === payload.id)
      ) {
        state.playList.push(payload);
      }
    },
  },
});

export const { addVideo } = playListSlice.actions;
export default playListSlice.reducer;
