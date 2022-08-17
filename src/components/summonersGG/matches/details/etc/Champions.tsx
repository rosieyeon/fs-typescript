import { MatchData } from 'features/riot/matchDetailSlice';
import React, { Dispatch, SetStateAction } from 'react';
import { RIOT_CHAMP_IMG } from 'services/riot/cdnValue';
import findRedBlue from 'utils/findRedBlue';
import {
  ChampionsBox,
  ChampionsImgBox,
  ChampionsImg,
  ChampionsLayout,
} from './Champions.styled';
import { lineColors } from './Etc';

interface ChampionsProps {
  data: MatchData;
  setSelected: Dispatch<SetStateAction<boolean[]>>;
  selected: Array<boolean>;
}

const Champions = (data: ChampionsProps) => {
  const isSelect = data.selected;
  const setIsSelect = data.setSelected;

  const getActiveButton = (idx: number) => {
    setIsSelect([
      ...isSelect.slice(0, idx),
      !isSelect[idx],
      ...isSelect.slice(idx + 1),
    ]);
  };
  // console.log(isSelect);
  return (
    <ChampionsLayout>
      <ChampionsBox>
        {findRedBlue(data.data.participants).blue.map((player, idx) => (
          <ChampionsImgBox
            key={idx}
            color={lineColors[idx]}
            onClick={() => {
              getActiveButton(idx);
            }}
          >
            <ChampionsImg
              src={`${RIOT_CHAMP_IMG}/${player.championName}.png`}
            />
          </ChampionsImgBox>
        ))}
      </ChampionsBox>
      <ChampionsBox>
        {findRedBlue(data.data.participants).red.map((player, idx) => (
          <ChampionsImgBox
            key={idx}
            color={lineColors[idx + 5]}
            onClick={() => {
              getActiveButton(idx + 5);
            }}
          >
            <ChampionsImg
              src={`${RIOT_CHAMP_IMG}/${player.championName}.png`}
            />
          </ChampionsImgBox>
        ))}
      </ChampionsBox>
    </ChampionsLayout>
  );
};
export default Champions;
