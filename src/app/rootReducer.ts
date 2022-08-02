import { matchDetailSlice } from "features/matchList/matchDetailSlice";
import { summonerNameSlice } from "features/summonerNameSlice";
import { summonerInfoSlice } from "features/summonersList/summonerInfoSlice";
import { summonerTierSlice } from "features/summonersList/summonerTierSlice";
import { youtubeListSlice } from "features/youtubeList/youtubeListSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  summonerInfo: summonerInfoSlice.reducer,
  youtubeList: youtubeListSlice.reducer,
  summonerName: summonerNameSlice.reducer,
  summonerTier: summonerTierSlice.reducer,
  matchDetails: matchDetailSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
