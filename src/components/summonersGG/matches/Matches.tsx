import getMatchData from "api/getMatchData";
import { useAppDispatch, useAppSelector } from "app/store";
import { match } from "assert";
import React from "react";
import { useEffect } from "react";

import { MatchesLayout } from "./Matches.styled";

const Matches = () => {
  const { matchDetail } = useAppSelector((state) => state.matchDetails);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getMatchData(
        "_TKsGvBGiPJPk33dNrkkj7obgjhkdUxAuf3IiX1zABa1ZMe2MYIlcsWHp_adPCgy0roiMcscV6gkUw"
      )
    );
  }, []);
  console.log(matchDetail);
  return (
    <MatchesLayout>
      hihi
      {/* {matchList.length === matchIds.length &&
        matchList.map(
          (match, idx) => <>{match.gameDuration}</>
          // <MatchItem key={idx} match={match} />
        )} */}
    </MatchesLayout>
  );
};

export default Matches;
