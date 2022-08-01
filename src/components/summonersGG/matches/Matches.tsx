import getMatchIds from "api/getMatchIds";
import { useAppDispatch, useAppSelector } from "app/store";
import React from "react";
import { useEffect } from "react";
import { MatchesLayout } from "./Matches.styled";
import MatchItem from "./MatchItem";

const Matches = () => {
  const { summonerData } = useAppSelector((state) => state.summonerInfo);
  const { matchIds } = useAppSelector((state) => state.matchIds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (summonerData.puuid) {
      dispatch(getMatchIds(summonerData.puuid));
    }
  }, [summonerData]);

  // console.log(matchIds);
  return (
    <MatchesLayout>
      {matchIds &&
        matchIds.map((matchId: string, idx) => (
          <MatchItem key={idx} matchId={matchId} />
        ))}
    </MatchesLayout>
  );
};

export default Matches;
