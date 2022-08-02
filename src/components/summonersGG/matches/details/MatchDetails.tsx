import { useAppSelector } from "app/store";
import {
  matchData,
  matchParticipants,
} from "features/matchList/matchDetailSlice";
import React, { useEffect, useState } from "react";
import findRedBlue from "util/findRedBlue";
import {
  DetailsLayout,
  DetailsTable,
  DetailsTh,
  DetailsThead,
  DetailsTr,
  DetailWinLose,
} from "./MatchDetails.styled";

interface matchProps {
  myData: matchParticipants;
  gameData: matchData;
}

const tableHead = ["OPScore", "KDA", "Damage", "Wards", "CS", "Item"];

const MatchDetails = (data: matchProps) => {
  // console.log(data.match);
  const match = data.gameData;
  const [myData, setMyData] = useState<matchParticipants>();
  const { summonerData } = useAppSelector((state) => state.summonerInfo);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      if (match.participants[i].summonerName == summonerData.name) {
        setMyData(match.participants[i]);
      }
    }
  }, []);

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
      </DetailsTable>
    </DetailsLayout>
  );
};
export default MatchDetails;
