import { useAppSelector } from 'app/store';
import { t1PlayChampProps, t1PlayerChamp } from 'app/t1Players';
import React, { useEffect, useState } from 'react';
import { MostChampHeader, MostChampLayout } from './MostChamp.styled';
import MostChampItem from './MostChampItem';

const MostChamp = () => {
  const { summonerData } = useAppSelector((state) => state.summonerInfo);
  const [mostChampList, setMostChampList] = useState<t1PlayChampProps>();
  // console.log(summonerData.name, mostChampList);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      // console.log(summonerData.name, t1PlayerChamp[i].name);
      if (summonerData.name === t1PlayerChamp[i].name) {
        setMostChampList(t1PlayerChamp[i]);
      }
    }
  }, [summonerData.name]);

  return (
    <MostChampLayout>
      <MostChampHeader>S2022 Ranked Solo</MostChampHeader>
      {mostChampList?.champs.map((champ, idx) => (
        <MostChampItem key={idx} champs={champ} />
      ))}
    </MostChampLayout>
  );
};

export default MostChamp;
