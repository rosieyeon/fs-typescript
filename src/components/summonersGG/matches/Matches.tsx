import getMatchData from "api/getMatchData";
import { useAppDispatch, useAppSelector } from "app/store";
import { match } from "assert";
import React from "react";
import { useEffect } from "react";

import { MatchesLayout } from "./Matches.styled";
import MatchItem from "./MatchItem";

const Matches = () => {
  const { summonerData } = useAppSelector((state) => state.summonerInfo);
  const { matchDetail, loading, error } = useAppSelector(
    (state) => state.matchDetails
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (summonerData.puuid) {
      dispatch(getMatchData(summonerData.puuid));
    }
  }, [summonerData.puuid]);
  console.log(matchDetail);
  return (
    <MatchesLayout>
      {loading === "pending" ? (
        "LOADING"
      ) : error ? (
        "ERROR"
      ) : (
        <>
          {matchDetail.map((match, index) => (
            <>
              {match.gameDuration}
              <MatchItem match={match} key={index} />
            </>
          ))}
        </>
      )}
    </MatchesLayout>
  );
};

export default Matches;
