import React, { useEffect, useState } from "react";

import { useAppSelector } from "app/store";
import {
  matchData,
  matchParticipants,
  TeamObjectives,
} from "features/matchList/matchDetailSlice";
import timeForToday from "util/timeForToday";
import {
  MatchItemBar,
  MatchItemChamp,
  MatchItemChampImg,
  MatchItemChampLv,
  MatchItemDeaths,
  MatchItemDetailBox,
  MatchItemGame,
  MatchItemInfo,
  MatchItemInfoBox,
  MatchItemItem,
  MatchItemItemBox,
  MatchItemKDA,
  MatchItemKDACnt,
  MatchItemKDARatio,
  MatchItemKillAssis,
  MatchItemLane,
  MatchItemLayout,
  MatchItemPerk,
  MatchItemPerksBox,
  MatchItemPKill,
  MatchItemQueueType,
  MatchItemSlot,
  MatchItemSpell,
  MatchItemSpellBox,
  MatchItemStats,
  MatchItemTime,
  MatchItemWinLose,
} from "./MatchItem.styled";
import { RIOT_CDN, RIOT_CHAMP_IMG } from "services/cdnValue";
import toCapitalize from "util/toCapitalize";

interface matchIDProps {
  match: matchData;
  key: number;
}

const MatchItem = ({ match }: matchIDProps) => {
  console.log(match);
  const [myData, setMyData] = useState<matchParticipants>();
  const [objectives, setObjectives] = useState<TeamObjectives>();
  const [itemsList, setItemsList] = useState<string[]>([]);
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
  console.log(objectives);

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

      <MatchItemInfoBox>
        <MatchItemInfo>
          <MatchItemChamp>
            <MatchItemChampImg
              src={`${RIOT_CHAMP_IMG}/${myData.championName}.png`}
            />
            <MatchItemChampLv>{myData.champLevel}</MatchItemChampLv>
          </MatchItemChamp>

          <MatchItemSpellBox>
            <MatchItemSpell
              src={`/images/SummonerSpell/${myData.spell1}.png`}
            />
            <MatchItemSpell
              src={`/images/SummonerSpell/${myData.spell2}.png`}
            />
          </MatchItemSpellBox>

          <MatchItemPerksBox>
            <MatchItemPerk src={`${RIOT_CDN}/perk/${myData.perks1}.png`} />
            <MatchItemPerk src={`${RIOT_CDN}/perkStyle/${myData.perks2}.png`} />
          </MatchItemPerksBox>

          <MatchItemKDA winlose={myData.win}>
            <MatchItemKDACnt>
              <MatchItemKillAssis>{myData.kills}</MatchItemKillAssis> /
              <MatchItemDeaths> {myData.deaths}</MatchItemDeaths> /
              <MatchItemKillAssis> {myData.assists}</MatchItemKillAssis>
            </MatchItemKDACnt>
            <MatchItemKDARatio>{myData.kda}:1 KDA</MatchItemKDARatio>
          </MatchItemKDA>

          <MatchItemDetailBox>
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
          </MatchItemDetailBox>
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
