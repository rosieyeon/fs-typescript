import { useAppSelector } from "app/store";
import { LargeNumberLike } from "crypto";
import {
  matchData,
  matchParticipants,
} from "features/matchList/matchDetailSlice";
import React, { useEffect, useState } from "react";
import findRedBlue from "util/findRedBlue";
import {
  DetailsLayout,
  DetailsTable,
  DetailsTBody,
  DetailsTh,
  DetailsThead,
  DetailsTr,
  DetailWinLose,
} from "./MatchDetails.styled";
import DetailChamp from "./tableData/champ/DetailChamp";
import TableRow from "./tableData/TableRow";

interface matchProps {
  myData: matchParticipants;
  gameData: matchData;
  pkill: number;
}

interface redBlueProps {
  blue: matchParticipants[];
  red: matchParticipants[];
}
const tableHead = ["KDA", "Damage", "Wards", "CS", "Item"];

const MatchDetails = (data: matchProps) => {
  // console.log(data.match);
  const match = data.gameData;
  const myData = data.myData;
  const [redBlue, setRedBlue] = useState<redBlueProps>();
  const [maxDamage, setMaxDamage] = useState(0);
  const [maxDamageTaken, setMaxDagameTaken] = useState(0);
  console.log(match, myData);

  const findWinLose = (win: boolean) => {
    if (win) {
      return "Victory";
    } else {
      return "Defeat";
    }
  };

  useEffect(() => {
    const damage: number[] = [];
    const damageTaken: number[] = [];
    for (let i = 0; i < 10; i++) {
      damage.push(match.participants[i].totalDamageDealtToChampions);
      damageTaken.push(match.participants[i].totalDamageTaken);
    }
    const maxDmgVal = Math.max.apply(null, damage);
    const maxDmgTknVal = Math.max.apply(null, damageTaken);
    setMaxDamage(maxDmgVal);
    setMaxDagameTaken(maxDmgTknVal);

    setRedBlue(findRedBlue(match.participants));
  }, []);
  console.log(redBlue?.blue);

  return (
    <DetailsLayout>
      <DetailsTable>
        <DetailsThead>
          <DetailsTr win={myData.win}>
            <DetailWinLose>{findWinLose(myData.win)}</DetailWinLose>
            {tableHead.map((th, idx) => (
              <DetailsTh key={idx}>{th}</DetailsTh>
            ))}
          </DetailsTr>
        </DetailsThead>
        <DetailsTBody>
          {redBlue?.blue.map((player, idx) => (
            <TableRow
              key={idx}
              matchData={player}
              pkill={data.pkill}
              maxDmg={maxDamage}
              maxDmgTkn={maxDamageTaken}
              duration={match.gameDuration / 60}
              win={myData.win}
            />
          ))}
        </DetailsTBody>
      </DetailsTable>
    </DetailsLayout>
  );
};
export default MatchDetails;
