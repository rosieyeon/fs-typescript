import React from 'react';
import { RIOT_CHAMP_IMG } from 'services/cdnValue';
import {
  DetailChampImg,
  DetailChampLayout,
  DetailChampLV,
} from './DetailChamp.styled';

interface champProps {
  name: string;
  level: number;
}

const DetailChamp = (champ: champProps) => {
  return (
    <DetailChampLayout>
      <DetailChampImg src={`${RIOT_CHAMP_IMG}/${champ.name}.png`} />
      <DetailChampLV>{champ.level}</DetailChampLV>
    </DetailChampLayout>
  );
};
export default DetailChamp;
