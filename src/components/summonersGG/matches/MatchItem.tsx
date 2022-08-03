import React, { useEffect, useState } from "react";

import { useAppSelector } from "app/store";
import {
  matchData,
  matchParticipants,
  TeamObjectives,
} from "features/matchList/matchDetailSlice";
import {
  MatchDetailLayout,
  MatchItemDiv,
  MatchItemGameData,
  MatchItemLayout,
  MatchItemMore,
  MatchItemMoreBtn,
} from "./MatchItem.styled";
import MatchInfo from "./matchInfo/MatchInfo";
import GameData from "./gameData/GameData";
import Items from "./items/Items";
import Participants from "./participants/Participants";
import { ARROW_DOWN } from "services/cdnValue";
import MatchDetails from "./details/MatchDetails";

interface matchIDProps {
  match: matchData;
  // open: React.Dispatch<React.SetStateAction<boolean>>;
  // isOpen: boolean;
}

const MatchItem = (data: matchIDProps) => {
  const match = data.match;
  const [isOpen, setIsOpen] = useState(false);
  const [myTeam, setMyTeam] = useState("red");
  const [notMyTeam, setNotMyTeam] = useState("blue");
  const [myData, setMyData] = useState<matchParticipants>();
  const [objectives, setObjectives] = useState<TeamObjectives>();
  const [itemsList, setItemsList] = useState<string[]>([]);
  const [pkill, setpkill] = useState(0);
  const { summonerData } = useAppSelector((state) => state.summonerInfo);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      if (match.participants[i].summonerName == summonerData.name) {
        setMyData(match.participants[i]);
        if (i < 5) {
          setMyTeam("blue");
          setNotMyTeam("red");
        }
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

  const onClickMore = () => {
    setIsOpen(!isOpen);
  };

  return myData ? (
    <MatchItemDiv>
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

        <MatchItemMore winlose={myData.win}>
          {myData.win ? (
            <MatchItemMoreBtn
              onClick={onClickMore}
              src={`${ARROW_DOWN}blue.svg`}
            />
          ) : (
            <MatchItemMoreBtn
              onClick={onClickMore}
              src={`${ARROW_DOWN}red.svg`}
            />
          )}
        </MatchItemMore>
      </MatchItemLayout>
      {isOpen && (
        <MatchDetailLayout>
          <MatchDetails
            myData={myData}
            gameData={match}
            pkill={pkill}
            myTeam={myTeam}
            win={myData.win}
          />
          <MatchDetails
            myData={myData}
            gameData={match}
            pkill={pkill}
            myTeam={notMyTeam}
            win={!myData.win}
          />
        </MatchDetailLayout>
      )}
    </MatchItemDiv>
  ) : (
    <></>
  );
};
export default MatchItem;
