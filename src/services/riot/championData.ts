interface ChampDto {
  allytips: string[];
  blurb: string;
  enemytips: string[];
  id: string;
  image: ImageDto;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  key: string;
  lore: string;
  name: string;
  partype: string;
  passive: {
    description: string;
    image: ImageDto;
    name: string;
  };
  recommended: [];
  skins: [];
  spells: SpellsDataDto[];
}

interface SpellsDataDto {
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costType: string;
  datavalues: null;
  description: string;
  effect: [];
  effectBurn: [];
  id: string;
  image: ImageDto;
  leveltip: {
    label: [];
    effect: [];
  };
  maxammo: string;
  maxrank: number;
  name: string;
  range: number[];
  rangeBurn: string;
  resource: string;
  tooltip: string;
}

interface ImageDto {
  full: string;
  sprite: string;
  group: string;
  w: number;
  x: number;
  y: number;
}

export const championSpells = (data: ChampDto) => {
  return data.spells.map((spell: SpellsDataDto, idx: number) => {
    return {
      name: spell.name,
      id: spell.id,
      slot: idx,
      desc: spell.description,
    };
  });
};
