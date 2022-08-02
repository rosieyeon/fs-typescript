import React from "react";
import { RIOT_CDN } from "services/cdnValue";
import { Perk, PerksBox, PerksLayout, Spell, SpellBox } from "./Perks.styled";

interface perksProps {
  spells: number[];
  perk1: number;
  perk2: number;
}
const Perks = (data: perksProps) => {
  return (
    <PerksLayout>
      <SpellBox>
        {data.spells.map((spell, idx) => (
          <Spell key={idx} src={`/images/SummonerSpell/${spell}.png`} />
        ))}
      </SpellBox>

      <PerksBox>
        <Perk src={`${RIOT_CDN}/perk/${data.perk1}.png`} />
        <Perk src={`${RIOT_CDN}/perkStyle/${data.perk2}.png`} />
      </PerksBox>
    </PerksLayout>
  );
};
export default Perks;
