import React, { useEffect, useState } from "react";

import { useAppSelector } from "app/store";
import {
  matchData,
  matchParticipants,
  TeamObjectives,
} from "features/matchList/matchDetailSlice";
import {
  MatchItemDeaths,
  MatchItemInfo,
  MatchItemInfoBox,
  MatchItemItem,
  MatchItemItemBox,
  MatchItemKDA,
  MatchItemKDACnt,
  MatchItemKDARatio,
  MatchItemKillAssis,
  MatchItemLayout,
  MatchItemSlot,
} from "./MatchItem.styled";
import { RIOT_CDN } from "services/cdnValue";
import MatchInfo from "./matchInfo/MatchInfo";
import GameData from "./gameData/GameData";

interface matchIDProps {
  match: matchData;
  key: number;
}

const MatchItem = ({ match }: matchIDProps) => {
  console.log(match);
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
  console.log(objectives);

  return myData ? (
    <MatchItemLayout winlose={myData.win}>
      <MatchInfo
        endTime={match.gameEndTimestamp}
        myData={myData}
        duration={match.gameDuration}
      />

      <MatchItemInfoBox>
        <MatchItemInfo>
          <GameData
            data={myData}
            pkill={pkill}
            duration={match.gameDuration / 60}
          />

          <MatchItemKDA winlose={myData.win}>
            <MatchItemKDACnt>
              <MatchItemKillAssis>{myData.kills}</MatchItemKillAssis> /
              <MatchItemDeaths> {myData.deaths}</MatchItemDeaths> /
              <MatchItemKillAssis> {myData.assists}</MatchItemKillAssis>
            </MatchItemKDACnt>
            <MatchItemKDARatio>{myData.kda}:1 KDA</MatchItemKDARatio>
          </MatchItemKDA>

          {/* <MatchItemDetailBox>
            {objectives && (
              <MatchItemPKill>
                P/Kill{" "}
                {parseInt(
                  String(
                    ((myData.kills + myData.assists) /
                      objectives?.champion.kills) *
                      100
                  )
                )}
                %
              </MatchItemPKill>
            )}
            <MatchItemStats>
              Control Ward {myData.visionWardsBoughtInGame}
            </MatchItemStats>
            <MatchItemStats>
              CS {myData.cs} (
              {(myData.cs / (match.gameDuration / 60)).toFixed(1)})
            </MatchItemStats>
            <MatchItemLane>{toCapitalize(myData.lane)}</MatchItemLane>
          </MatchItemDetailBox> */}
        </MatchItemInfo>

        <MatchItemItemBox>
          {itemsList.map((item, idx) =>
            item !== "0" ? (
              <MatchItemSlot key={idx} winlose={myData.win}>
                <MatchItemItem src={`${RIOT_CDN}/item/${item}.png`} />
              </MatchItemSlot>
            ) : (
              <MatchItemSlot winlose={myData.win} key={idx}></MatchItemSlot>
            )
          )}
        </MatchItemItemBox>
      </MatchItemInfoBox>
      {/* <MatchItemParticipants></MatchItemParticipants> */}
    </MatchItemLayout>
  ) : (
    <></>
  );
};
export default MatchItem;
