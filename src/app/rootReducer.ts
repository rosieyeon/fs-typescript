import { matchDetailSlice } from 'features/riot/matchDetailSlice';
import { summonerInfoSlice } from 'features/riot/summonerInfoSlice';
import { summonerTierSlice } from 'features/riot/summonerTierSlice';
import { youtubeListSlice } from 'features/youtube/youtubeListSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  summonerInfo: summonerInfoSlice.reducer,
  youtubeList: youtubeListSlice.reducer,
  summonerTier: summonerTierSlice.reducer,
  matchDetails: matchDetailSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
