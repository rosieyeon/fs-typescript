import { matchParticipants } from "features/matchList/matchDetailSlice";
import React, { useEffect, useState } from "react";
import DetailChamp from "./champ/DetailChamp";
import DetailPerks from "./perks/DetailPerks";
import { DetailTD, DetailTR } from "./TableRow.styled";

interface rowDataProps {
  matchData: matchParticipants;
}

const TableRow = (data: rowDataProps) => {
  const matchData = data.matchData;
  const [spellsList, setSpellsList] = useState<number[]>([]);

  useEffect(() => {
    const spells = [];
    spells.push(matchData.spell1, matchData.spell2);
    setSpellsList(spells);
  }, []);

  return (
    <DetailTR>
      <DetailTD>
        <DetailChamp
          name={matchData.championName}
          level={matchData.champLevel}
        />
        <DetailPerks
          spells={spellsList}
          perk1={matchData.perks1}
          perk2={matchData.perks2}
        />
      </DetailTD>
      <DetailTD></DetailTD>
    </DetailTR>
  );
};
export default TableRow;
