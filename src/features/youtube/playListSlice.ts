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
        console.log(
          !current(state.playList).some((youtube) => youtube.id === payload.id)
        );
        console.log(current(state.playList));
        state.playList.push(payload);
      }
    },
    removeVideo: (state, { payload }: PayloadAction<YoutubeData>) => {
      state.playList = state.playList.filter(
        (video) => video.id !== payload.id
      );
    },
  },
});

export const { addVideo, removeVideo } = playListSlice.actions;
export default playListSlice.reducer;
