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
}

const tableHead = ["OPScore", "KDA", "Damage", "Wards", "CS", "Item"];

const MatchDetails = (data: matchProps) => {
  // console.log(data.match);
  const match = data.gameData;
  const myData = data.myData;
  console.log(match, myData);

  // const participants = findRedBlue(match.participants);
  return (
    <DetailsLayout>
      <DetailsTable>
        <DetailsThead>
          <DetailsTr>
            {myData?.win ? (
              <DetailsTh>
                <DetailWinLose>Victory</DetailWinLose> (Blue Team)
              </DetailsTh>
            ) : (
              <DetailsTh>
                <DetailWinLose>Defeat</DetailWinLose> (Blue Team)
              </DetailsTh>
            )}
            {tableHead.map((th, idx) => (
              <DetailsTh key={idx}>{th}</DetailsTh>
            ))}
          </DetailsTr>
        </DetailsThead>
        <DetailsTBody>
          <TableRow matchData={myData} />
          {/* <DetailsTr>
            <DetailsTh>
              <DetailChamp
                name={myData.championName}
                level={myData.champLevel}
              />
            </DetailsTh>
          </DetailsTr> */}
        </DetailsTBody>
      </DetailsTable>
    </DetailsLayout>
  );
};
export default MatchDetails;
