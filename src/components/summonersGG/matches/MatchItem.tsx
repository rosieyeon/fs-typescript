import { matchData } from "features/matchList/matchDetailSlice";
import React from "react";

import { MatchItemLayout } from "./MatchItem.styled";

interface matchIDProps {
  match: matchData;
  key: number;
}
const MatchItem = ({ match }: matchIDProps) => {
  console.log(match);

  // useEffect(() => {
  //   dispatch(getMatchDetails(matchId));
  // }, [matchId]);

  // useEffect(() => {
  //   if (matchDetail) {
  //     setDuration(matchDetail.gameDuration);
  //   }
  // }, [matchDetail]);

  return <MatchItemLayout></MatchItemLayout>;
};
export default MatchItem;
