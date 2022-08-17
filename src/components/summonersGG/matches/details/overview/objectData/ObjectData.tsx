import React from 'react';
import { RIOT_OBJ } from 'services/riot/cdnValue';
import { sortObjProps } from '../ObjectDetails';
// import { sortObjProps } from '../ObjectDetails';
// import { sortObjProps } from '../../ObjectDetails';
import {
  ObjectDataContent,
  ObjectDataImg,
  ObjectDataLayout,
  ObjectDataTxt,
} from './ObjectData.styled';

interface objProps {
  data: sortObjProps[];
  win: boolean;
}
const ObjectData = (data: objProps) => {
  const objectives = data.data;
  const setColor = (win: boolean) => {
    if (win) {
      return '';
    } else {
      return '-r';
    }
  };
  return (
    <ObjectDataLayout>
      {objectives.map((objective, idx) => (
        <ObjectDataContent key={idx}>
          <ObjectDataImg
            src={`${RIOT_OBJ}icon-${objective.name}${setColor(data.win)}.svg`}
          />
          <ObjectDataTxt>{objective.kills}</ObjectDataTxt>
        </ObjectDataContent>
      ))}
    </ObjectDataLayout>
  );
};
export default ObjectData;
