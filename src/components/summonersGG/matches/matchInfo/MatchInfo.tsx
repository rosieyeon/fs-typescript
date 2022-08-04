import React from "react";
import { matchParticipants } from "features/riot/matchDetailSlice";
import timeForToday from "util/timeForToday";
import {
  MatchInfoBar,
  MatchInfoLayout,
  MatchInfoQueueType,
  MatchInfoTime,
  MatchInfoWinLose,
} from "./MatchInfo.styled";

interface myDataProps {
  myData: matchParticipants;
  endTime: number;
  duration: number;
}

const MatchInfo = (myData: myDataProps) => {
  const data = myData.myData;
  const duration = myData.duration;
  return (
    <MatchInfoLayout>
      <MatchInfoQueueType winlose={data.win}>Ranked Solo</MatchInfoQueueType>
      <MatchInfoTime>{timeForToday(myData.endTime)}</MatchInfoTime>
      <MatchInfoBar winlose={data.win}></MatchInfoBar>
      {data.win ? (
        <MatchInfoWinLose>Victory</MatchInfoWinLose>
      ) : (
        <MatchInfoWinLose>Defeat</MatchInfoWinLose>
      )}

      <MatchInfoTime>
        {parseInt(String(duration / 60))}m {duration % 60}s
      </MatchInfoTime>
    </MatchInfoLayout>
  );
};
export default MatchInfo;
