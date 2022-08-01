import getMatchDetails from "api/getMatchDetails";
import getMatchIds from "api/getMatchIds";
import React from "react";
import { useEffect } from "react";
import timeForToday from "util/timeForToday";

const Matches = () => {
  useEffect(() => {
    // getMatchIds(
    //   "_TKsGvBGiPJPk33dNrkkj7obgjhkdUxAuf3IiX1zABa1ZMe2MYIlcsWHp_adPCgy0roiMcscV6gkUw"
    // );
    getMatchDetails("");
  }, []);
  // getMatchDetails();
  // const time = new Date(1659294653362);
  // console.log(typeof time, time);
  // console.log(timeForToday(1659294653362));

  return <>HIHI</>;
};

export default Matches;
