import { matchParticipants } from "features/matchList/matchDetailSlice";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ChampInfo from "./champ/ChampInfo";
import { GameDataLayout } from "./GameData.styled";
import Perks from "./perks/Perks";

interface dataProps {
  data: matchParticipants;
}
const GameData = (data: dataProps) => {
  const gameData = data.data;
  const [spellsList, setSpellsList] = useState<number[]>([]);

  useEffect(() => {
    const spells = [];
    spells.push(gameData.spell1, gameData.spell2);
    setSpellsList(spells);
  }, []);

  return (
    <GameDataLayout>
      <ChampInfo name={gameData.championName} level={gameData.champLevel} />
      <Perks
        spells={spellsList}
        perk1={gameData.perks1}
        perk2={gameData.perks2}
      />
    </GameDataLayout>
  );
};

export default GameData;
