import React, { useEffect, useState } from "react";

import { useAppSelector } from "app/store";
import {
  matchData,
  matchParticipants,
} from "features/matchList/matchDetailSlice";
import timeForToday from "util/timeForToday";
import {
  MatchItemBar,
  MatchItemChamp,
  MatchItemChampImg,
  MatchItemChampLv,
  MatchItemGame,
  MatchItemInfo,
  MatchItemItem,
  MatchItemItemBox,
  MatchItemLayout,
  MatchItemParticipants,
  MatchItemPerk,
  MatchItemPerksBox,
  MatchItemQueueType,
  MatchItemSlot,
  MatchItemSpell,
  MatchItemSpellBox,
  MatchItemTime,
  MatchItemWinLose,
} from "./MatchItem.styled";
import { RIOT_CDN, RIOT_CHAMP_IMG } from "services/cdnValue";

interface matchIDProps {
  match: matchData;
  key: number;
}

const MatchItem = ({ match }: matchIDProps) => {
  console.log(match);
  const [myData, setMyData] = useState<matchParticipants>();
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
    }
  }, [myData]);

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

      <MatchItemInfo>
        <MatchItemChamp>
          <MatchItemChampImg
            src={`${RIOT_CHAMP_IMG}/${myData.championName}.png`}
          />
          <MatchItemChampLv>{myData.champLevel}</MatchItemChampLv>
        </MatchItemChamp>

        <MatchItemSpellBox>
          <MatchItemSpell src={`/images/SummonerSpell/${myData.spell1}.png`} />
          <MatchItemSpell src={`/images/SummonerSpell/${myData.spell2}.png`} />
        </MatchItemSpellBox>

        <MatchItemPerksBox>
          <MatchItemPerk src={`${RIOT_CDN}/perk/${myData.perks1}.png`} />
          <MatchItemPerk src={`${RIOT_CDN}/perkStyle/${myData.perks2}.png`} />
        </MatchItemPerksBox>

        <MatchItemItemBox>
          {itemsList.map((item, idx) =>
            item !== "0" ? (
              <MatchItemSlot winlose={myData.win}>
                <MatchItemItem key={idx} src={`${RIOT_CDN}/item/${item}.png`} />
              </MatchItemSlot>
            ) : (
              <MatchItemSlot winlose={myData.win} key={idx}></MatchItemSlot>
            )
          )}
        </MatchItemItemBox>
      </MatchItemInfo>
      <MatchItemParticipants></MatchItemParticipants>
    </MatchItemLayout>
  ) : (
    <></>
  );
};
export default MatchItem;
