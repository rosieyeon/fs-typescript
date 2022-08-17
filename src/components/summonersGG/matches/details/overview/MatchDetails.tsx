import { MatchData, matchParticipants } from 'features/riot/matchDetailSlice';
import React, { useEffect, useState } from 'react';
import findRedBlue from 'utils/findRedBlue';
import toCapitalize from 'utils/toCapitalize';
import {
  DetailsTable,
  DetailsTBody,
  DetailsTh,
  DetailsThead,
  DetailsTr,
  DetailWinLose,
} from './MatchDetails.styled';
import TableRow from './tableData/TableRow';

interface matchProps {
  myData: matchParticipants;
  gameData: MatchData;
  myTeam: string;
  win: boolean;
}

interface redBlueProps {
  blue: matchParticipants[];
  red: matchParticipants[];
}
const tableHead = ['KDA', 'Damage', 'Wards', 'CS', 'Item'];

const MatchDetails = (data: matchProps) => {
  const match = data.gameData;
  const myData = data.myData;
  const [redBlue, setRedBlue] = useState<redBlueProps>();
  const [teamData, setTeamData] = useState<matchParticipants[]>();
  const [maxDamage, setMaxDamage] = useState(0);
  const [maxDamageTaken, setMaxDagameTaken] = useState(0);
  // console.log(match, myData);

  const findWinLose = (win: boolean) => {
    if (win) {
      return 'Victory';
    } else {
      return 'Defeat';
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
  }, [match.participants]);

  useEffect(() => {
    if (redBlue) {
      if (data.myTeam === 'blue') {
        setTeamData(redBlue.blue);
      } else {
        setTeamData(redBlue.red);
      }
    }
  }, [data.myTeam, redBlue]);

  const getTotalKills = () => {
    if (data.win === match.teams[0].win) {
      return match.teams[0].objectives.champion.kills;
    } else {
      return match.teams[1].objectives.champion.kills;
    }
  };

  return (
    <DetailsTable isMine={data.win === myData.win}>
      <DetailsThead>
        <DetailsTr win={data.win}>
          <DetailWinLose>
            {findWinLose(data.win)} ({toCapitalize(data.myTeam)} Team)
          </DetailWinLose>
          {tableHead.map((th, idx) => (
            <DetailsTh key={idx}>{th}</DetailsTh>
          ))}
        </DetailsTr>
      </DetailsThead>
      <DetailsTBody win={data.win}>
        {teamData?.map((player, idx) => (
          <TableRow
            key={idx}
            matchData={player}
            pkill={getTotalKills()}
            maxDmg={maxDamage}
            maxDmgTkn={maxDamageTaken}
            duration={match.gameDuration / 60}
            win={myData.win}
            summoner={myData.summonerName}
          />
        ))}
      </DetailsTBody>
    </DetailsTable>
  );
};
export default MatchDetails;
