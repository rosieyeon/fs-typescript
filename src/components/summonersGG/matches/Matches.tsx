import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/store";

import MatchItem from "./MatchItem";
import getMatchData from "api/getMatchData";
import {
  LoadingSkeleton,
  MatchesContent,
  MatchesLayout,
} from "./Matches.styled";

const Matches = () => {
  const { summonerData } = useAppSelector((state) => state.summonerInfo);
  // console.log(summonerData.puuid);
  const { matchDetail, loading, error } = useAppSelector(
    (state) => state.matchDetails
  );
  console.log("?????");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (summonerData.puuid) {
      dispatch(getMatchData(summonerData.puuid));
    }
    console.log("RENDER");
    // dispatch(
    //   getMatchData(
    //     "T64V8V1oB4M9AeTyQ3BPqxMlOpxo3jV8_8YKtVIyDEZ3T5Bmt-clibT4IyNr_D9XakNeY9i8Fcr5Rw"
    //   )
    // );
  }, []);

  return (
    <MatchesLayout>
      {loading === "pending" ? (
        <LoadingSkeleton>LOADING</LoadingSkeleton>
      ) : error ? (
        <LoadingSkeleton>ERROR</LoadingSkeleton>
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
