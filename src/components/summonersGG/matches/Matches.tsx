import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/store";

import MatchItem from "./MatchItem";
import getMatchData from "api/getMatchData";
import { MatchesContent, MatchesLayout } from "./Matches.styled";

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
              <MatchItem match={match} />
            </MatchesContent>
          ))}
        </>
      )}
    </MatchesLayout>
  );
};

export default Matches;
