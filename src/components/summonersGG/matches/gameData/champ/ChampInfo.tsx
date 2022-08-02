import React from "react";
import { RIOT_CHAMP_IMG } from "services/cdnValue";
import { ChampInfoImg, ChampInfoLayout, ChampInfoLV } from "./ChampInfo.styled";

interface champProps {
  name: string;
  level: number;
}

const ChampInfo = (champ: champProps) => {
  return (
    <ChampInfoLayout>
      <ChampInfoImg src={`${RIOT_CHAMP_IMG}/${champ.name}.png`} />
      <ChampInfoLV>{champ.level}</ChampInfoLV>
    </ChampInfoLayout>
  );
};
export default ChampInfo;
