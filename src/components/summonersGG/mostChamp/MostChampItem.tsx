import { useAppSelector } from "app/store";
import { mostChampData, t1PlayChampProps, t1PlayerChamp } from "app/t1Player";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { RIOT_CHAMP_IMG } from "services/cdnValue";
import {
  MostChampBottom,
  MostChampBox,
  MostChampCS,
  MostChampFace,
  MostChampItemLayout,
  MostChampKDA,
  MostChampKDARatio,
  MostChampName,
  MostChampPlayed,
  MostChampWinRate,
} from "./MostChampItem.styled";

interface champsProps {
  champs: mostChampData;
}

const MostChampItem = ({ champs }: champsProps) => {
  return (
    <MostChampItemLayout>
      <MostChampFace src={`${RIOT_CHAMP_IMG}/${champs.name}.png`} />
      <MostChampBox>
        <MostChampName>{champs.name}</MostChampName>
        <MostChampCS>
          CS {champs.cs} ({champs.csPerMin})
        </MostChampCS>
      </MostChampBox>

      <MostChampBox>
        <MostChampKDA>
          <MostChampKDARatio>{champs.kdaRatio}</MostChampKDARatio>
          :1 KDA
        </MostChampKDA>
        <MostChampBottom>{champs.kda}</MostChampBottom>
      </MostChampBox>
      <MostChampBox>
        <MostChampWinRate>{champs.winRate}%</MostChampWinRate>
        <MostChampPlayed>{champs.game} Played</MostChampPlayed>
      </MostChampBox>
    </MostChampItemLayout>
  );
};
export default MostChampItem;
