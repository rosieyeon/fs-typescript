import React from "react";
import { matchParticipants } from "features/riot/matchDetailSlice";
import {
  KDACount,
  KDADeaths,
  KDAKillAssist,
  KDALayout,
  KDARatio,
} from "./KDA.styled";

interface kdaProps {
  data: matchParticipants;
}

const KDA = (data: kdaProps) => {
  const kda = data.data;
  return (
    <KDALayout winlose={kda.win}>
      <KDACount>
        <KDAKillAssist>{kda.kills}</KDAKillAssist> /
        <KDADeaths> {kda.deaths}</KDADeaths> /
        <KDAKillAssist> {kda.assists}</KDAKillAssist>
      </KDACount>
      <KDARatio>{kda.kda}:1 KDA</KDARatio>
    </KDALayout>
  );
};

export default KDA;
