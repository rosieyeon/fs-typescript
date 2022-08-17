import { MatchData, matchParticipants } from 'features/riot/matchDetailSlice';
import React, { useState } from 'react';
import { teamProps } from '../MatchItem';
import {
  DetailsCategoryButton,
  DetailsCategoryButtonBox,
  DetailsLayout,
  DetailsOverView,
} from './Details.styled';
import Etc from './etc/Etc';
import MatchDetails from './overview/MatchDetails';
import ObjectDetails from './overview/ObjectDetails';

const detailCategories = [
  { name: 'Overview' },
  { name: 'Build' },
  { name: 'etc' },
];

interface DetailProps {
  myData: matchParticipants;
  gameData: MatchData;
  myTeam: string;
  notMyTeam: string;
  win: boolean;

  objectData: teamProps[];
}
const Details = (data: DetailProps) => {
  console.log(data.gameData);
  const [isSelect, setIsSelect] = useState([true, false, false]);

  const getActiveButton = (idx: number) => {
    // eslint-disable-next-line array-callback-return
    isSelect.map((button, id) => {
      if (button) {
        setIsSelect([
          ...isSelect.slice(0, id),
          (isSelect[id] = false),
          ...isSelect.slice(id + 1),
        ]);
      }
    });
    setIsSelect([
      ...isSelect.slice(0, idx),
      !isSelect[idx],
      ...isSelect.slice(idx + 1),
    ]);
  };

  return (
    <DetailsLayout>
      <DetailsCategoryButtonBox>
        {detailCategories.map((category, idx) => (
          <DetailsCategoryButton
            key={idx}
            selected={isSelect[idx]}
            onClick={() => {
              getActiveButton(idx);
            }}
          >
            {category.name}
          </DetailsCategoryButton>
        ))}
      </DetailsCategoryButtonBox>
      {isSelect[0] && (
        <DetailsOverView>
          <MatchDetails
            myData={data.myData}
            gameData={data.gameData}
            myTeam={data.myTeam}
            win={data.win}
          />
          <ObjectDetails data={data.objectData} win={data.win} />
          <MatchDetails
            myData={data.myData}
            gameData={data.gameData}
            myTeam={data.notMyTeam}
            win={!data.win}
          />
        </DetailsOverView>
      )}
      {isSelect[2] && <Etc data={data.gameData} />}
    </DetailsLayout>
  );
};
export default Details;
