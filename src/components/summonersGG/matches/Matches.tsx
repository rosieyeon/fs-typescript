import getMatchDetails from "api/getMatchDetails";
import getMatchIds from "api/getMatchIds";
import { useAppDispatch, useAppSelector } from "app/store";
import React from "react";
import { useEffect } from "react";
import timeForToday from "util/timeForToday";

const Matches = () => {
  const { matchDetail, loading, error } = useAppSelector(
    (state) => state.matchDetails
  );

  console.log(matchDetail, loading, error);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // getMatchIds(
    //   "_TKsGvBGiPJPk33dNrkkj7obgjhkdUxAuf3IiX1zABa1ZMe2MYIlcsWHp_adPCgy0roiMcscV6gkUw"
    // );
    // getMatchDetails("");
    dispatch(getMatchDetails(""));
  }, [dispatch]);
  // getMatchDetails();
  // const time = new Date(1659294653362);
  // console.log(typeof time, time);
  // console.log(timeForToday(1659294653362));

  return <>HIHI</>;
};

export default Matches;
