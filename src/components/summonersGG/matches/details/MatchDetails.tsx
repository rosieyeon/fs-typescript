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

const tableHead = ["KDA", "Damage", "Wards", "CS", "Item"];

const MatchDetails = (data: matchProps) => {
  // console.log(data.match);
  const match = data.gameData;
  const myData = data.myData;
  const [maxDamage, setMaxDamage] = useState(0);
  const [maxDamageTaken, setMaxDagameTaken] = useState(0);
  console.log(match, myData);

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
  }, []);

  // const participants = findRedBlue(match.participants);
  return (
    <DetailsLayout>
      <DetailsTable>
        <DetailsThead>
          <DetailsTr>
            {myData?.win ? (
              <DetailWinLose>Victory</DetailWinLose>
            ) : (
              <DetailWinLose>Defeat</DetailWinLose>
            )}
            {tableHead.map((th, idx) => (
              <DetailsTh key={idx}>{th}</DetailsTh>
            ))}
          </DetailsTr>
        </DetailsThead>
        <DetailsTBody>
          <TableRow
            matchData={myData}
            pkill={data.pkill}
            maxDmg={maxDamage}
            maxDmgTkn={maxDamageTaken}
            duration={match.gameDuration / 60}
          />
        </DetailsTBody>
      </DetailsTable>
    </DetailsLayout>
  );
};
export default MatchDetails;
