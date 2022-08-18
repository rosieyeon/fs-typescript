import { matchParticipants } from 'features/riot/matchDetailSlice';
import React from 'react';
import { BuildLayout } from './Build.styled';
import ItemBuild from './Item/ItemBuild';
import Runes from './runes/Runes';
import SkillBuild from './skill/SkillBuild';

interface BuildProps {
  myData: matchParticipants;
}

const Build = (data: BuildProps) => {
  return (
    <BuildLayout>
      <ItemBuild />
      <SkillBuild />
      <Runes myData={data.myData} />
    </BuildLayout>
  );
};
export default Build;
