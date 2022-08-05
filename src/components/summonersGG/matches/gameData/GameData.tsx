import React, { useEffect, useState } from 'react';

import ChampInfo from './champ/ChampInfo';
import Perks from './perks/Perks';
import KDA from './kda/KDA';
import Stats from './stats/Stats';

import { matchParticipants } from 'features/riot/matchDetailSlice';
import { GameDataLayout } from './GameData.styled';

interface dataProps {
  data: matchParticipants;
  pkill: number;
  duration: number;
}

const GameData = (data: dataProps) => {
  const gameData = data.data;
  const [spellsList, setSpellsList] = useState<number[]>([]);

  useEffect(() => {
    const spells = [];
    spells.push(gameData.spell1, gameData.spell2);
    setSpellsList(spells);
  }, [gameData.spell1, gameData.spell2]);

  return (
    <GameDataLayout>
      <ChampInfo name={gameData.championName} level={gameData.champLevel} />
      <Perks
        spells={spellsList}
        perk1={gameData.perks1}
        perk2={gameData.perks2}
      />
      <KDA data={gameData} />
      <Stats data={gameData} pkill={data.pkill} duration={data.duration} />
    </GameDataLayout>
  );
};

export default GameData;
