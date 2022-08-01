import { useAppDispatch, useAppSelector } from "app/store";
import { match } from "assert";
import { matchData } from "features/matchList/matchDetailSlice";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

interface matchIDProps {
  match: matchData;
  key: number;
}
const MatchItem = ({ match }: matchIDProps) => {
  const { matchDetail, loading, error } = useAppSelector(
    (state) => state.matchDetails
  );
  console.log(match);

  const [duration, setDuration] = useState(0);

  // console.log(matchDetail, loading, error);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getMatchDetails(matchId));
  // }, [matchId]);

  // useEffect(() => {
  //   if (matchDetail) {
  //     setDuration(matchDetail.gameDuration);
  //   }
  // }, [matchDetail]);

  return <>hihi</>;
};
export default MatchItem;
