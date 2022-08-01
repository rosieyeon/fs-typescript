import getMatchData from "api/getMatchData";
import { useAppDispatch, useAppSelector } from "app/store";
import React from "react";
import { useEffect } from "react";

import { MatchesContent, MatchesLayout } from "./Matches.styled";
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
            <MatchesContent key={index}>
              <MatchItem match={match} key={index} />
            </MatchesContent>
          ))}
        </>
      )}
    </MatchesLayout>
  );
};

export default Matches;
