import React from 'react';
import { RIOT_CDN } from 'services/riot/cdnValue';
import {
  DetailPerk,
  DetailPerksBox,
  DetailPerksLayout,
  DetailSpell,
  DetailSpellBox,
} from './DetailPerks.styled';

interface perksProps {
  spells: number[];
  perk1: number;
  perk2: number;
}

const DetailPerks = (data: perksProps) => {
  return (
    <DetailPerksLayout>
      <DetailSpellBox>
        {data.spells.map((spell, idx) => (
          <DetailSpell key={idx} src={`/images/SummonerSpell/${spell}.png`} />
        ))}
      </DetailSpellBox>

      <DetailPerksBox>
        <DetailPerk src={`${RIOT_CDN}/perk/${data.perk1}.png`} />
        <DetailPerk src={`${RIOT_CDN}/perkStyle/${data.perk2}.png`} />
      </DetailPerksBox>
    </DetailPerksLayout>
  );
};
export default DetailPerks;
