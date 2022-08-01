import getMatchDetails from "api/getMatchDetails";
import { useAppDispatch, useAppSelector } from "app/store";
import React from "react";
import { useEffect } from "react";

interface matchIDProps {
  matchId: string;
  key: number;
}
const MatchItem = ({ matchId }: matchIDProps) => {
  const { matchDetail, loading, error } = useAppSelector(
    (state) => state.matchDetails
  );

  // console.log(matchDetail, loading, error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMatchDetails(matchId));
  }, [dispatch]);

  return <>hi</>;
};
export default MatchItem;
