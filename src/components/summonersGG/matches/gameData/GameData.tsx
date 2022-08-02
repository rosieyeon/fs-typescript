import { matchParticipants } from "features/matchList/matchDetailSlice";
import React from "react";
import ChampInfo from "./champ/ChampInfo";
import { GameDataChamp, GameDataLayout } from "./GameData.styled";

interface dataProps {
  data: matchParticipants;
}
const GameData = (data: dataProps) => {
  const gameData = data.data;
  return (
    <GameDataLayout>
      <ChampInfo name={gameData.championName} level={gameData.champLevel} />
    </GameDataLayout>
  );
};

export default GameData;
