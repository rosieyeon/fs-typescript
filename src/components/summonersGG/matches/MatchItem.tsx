import { useAppSelector } from "app/store";
import {
  matchData,
  matchParticipants,
} from "features/matchList/matchDetailSlice";
import React, { useEffect, useState } from "react";
import timeForToday from "util/timeForToday";

import {
  MatchItemBar,
  MatchItemGame,
  MatchItemInfo,
  MatchItemLayout,
  MatchItemParticipants,
  MatchItemQueueType,
  MatchItemTime,
  MatchItemWinLose,
} from "./MatchItem.styled";

interface matchIDProps {
  match: matchData;
  key: number;
}
const MatchItem = ({ match }: matchIDProps) => {
  console.log(match);
  const [myData, setMyData] = useState<matchParticipants>();

  const { summonerData } = useAppSelector((state) => state.summonerInfo);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      if (match.participants[i].summonerName == summonerData.name) {
        setMyData(match.participants[i]);
      }
    }
  }, []);
  console.log(myData);

  // useEffect(() => {
  //   dispatch(getMatchDetails(matchId));
  // }, [matchId]);

  // useEffect(() => {
  //   if (matchDetail) {
  //     setDuration(matchDetail.gameDuration);
  //   }
  // }, [matchDetail]);

  return myData ? (
    <MatchItemLayout winlose={myData.win}>
      <MatchItemGame>
        <MatchItemQueueType winlose={myData.win}>
          Ranked Solo
        </MatchItemQueueType>

        <MatchItemTime>{timeForToday(match.gameEndTimestamp)}</MatchItemTime>
        <MatchItemBar winlose={myData.win}></MatchItemBar>

        {myData.win ? (
          <MatchItemWinLose>Victory</MatchItemWinLose>
        ) : (
          <MatchItemWinLose>Defeat</MatchItemWinLose>
        )}
        <MatchItemTime>
          {parseInt(String(match.gameDuration / 60))}m {match.gameDuration % 60}
          s
        </MatchItemTime>
      </MatchItemGame>
      <MatchItemInfo></MatchItemInfo>
      <MatchItemParticipants></MatchItemParticipants>
    </MatchItemLayout>
  ) : (
    <></>
  );
};
export default MatchItem;
