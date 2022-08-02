import React, { useEffect, useState } from "react";

import { useAppSelector } from "app/store";
import {
  matchData,
  matchParticipants,
  TeamObjectives,
} from "features/matchList/matchDetailSlice";
import { MatchItemGameData, MatchItemLayout } from "./MatchItem.styled";
import MatchInfo from "./matchInfo/MatchInfo";
import GameData from "./gameData/GameData";
import Items from "./items/Items";
import Participants from "./participants/Participants";

interface matchIDProps {
  match: matchData;
  key: number;
}

const MatchItem = ({ match }: matchIDProps) => {
  // console.log(match);
  const [myData, setMyData] = useState<matchParticipants>();
  const [objectives, setObjectives] = useState<TeamObjectives>();
  const [itemsList, setItemsList] = useState<string[]>([]);
  const [pkill, setpkill] = useState(0);
  const { summonerData } = useAppSelector((state) => state.summonerInfo);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      if (match.participants[i].summonerName == summonerData.name) {
        setMyData(match.participants[i]);
      }
    }
  }, []);

  useEffect(() => {
    if (myData) {
      const items = [];
      items.push(
        String(myData.item0),
        String(myData.item1),
        String(myData.item2),
        String(myData.item3),
        String(myData.item4),
        String(myData.item5),
        String(myData.item6)
      );
      setItemsList(items);

      for (let i = 0; i < 2; i++) {
        if (myData.win == match.teams[i].win) {
          setObjectives(match.teams[i].objectives);
        }
      }
    }
  }, [myData]);

  useEffect(() => {
    if (myData && objectives) {
      setpkill(
        ((myData.kills + myData.assists) / objectives.champion.kills) * 100
      );
    }
  }, [objectives]);

  return myData ? (
    <MatchItemLayout winlose={myData.win}>
      <MatchInfo
        endTime={match.gameEndTimestamp}
        myData={myData}
        duration={match.gameDuration}
      />

      <MatchItemGameData>
        <GameData
          data={myData}
          pkill={pkill}
          duration={match.gameDuration / 60}
        />
        <Items items={itemsList} win={myData.win} />
      </MatchItemGameData>
      <Participants participants={match.participants} />
    </MatchItemLayout>
  ) : (
    <></>
  );
};
export default MatchItem;
