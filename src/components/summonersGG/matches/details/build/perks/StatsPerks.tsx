import React from 'react';
import { RIOT_CDN } from 'services/riot/cdnValue';
import {
  StatsPerksGrayImg,
  StatsPerksImg,
  StatsPerksImgBox,
  StatsPerksLayout,
} from './StatsPerks.styled';

interface StatPerksProps {
  statPerks: { defense: number; flex: number; offense: number };
}

const StatsPerks = (data: StatPerksProps) => {
  const defense = data.statPerks.defense;
  const flex = data.statPerks.flex;
  const offense = data.statPerks.offense;

  return (
    <StatsPerksLayout>
      <StatsPerksImgBox>
        {offenseLine.map((rune, idx) =>
          offense === rune ? (
            <StatsPerksImg
              key={idx}
              src={`${RIOT_CDN}/perkShard/${rune}.png`}
            />
          ) : (
            <StatsPerksGrayImg
              key={idx}
              src={`${RIOT_CDN}/perkShard/${rune}.png`}
            />
          )
        )}
      </StatsPerksImgBox>
      <StatsPerksImgBox>
        {flexLine.map((rune, idx) =>
          flex === rune ? (
            <StatsPerksImg
              key={idx}
              src={`${RIOT_CDN}/perkShard/${rune}.png`}
            />
          ) : (
            <StatsPerksGrayImg
              key={idx}
              src={`${RIOT_CDN}/perkShard/${rune}.png`}
            />
          )
        )}
      </StatsPerksImgBox>
      <StatsPerksImgBox>
        {defenseLine.map((rune, idx) =>
          defense === rune ? (
            <StatsPerksImg
              key={idx}
              src={`${RIOT_CDN}/perkShard/${rune}.png`}
            />
          ) : (
            <StatsPerksGrayImg
              key={idx}
              src={`${RIOT_CDN}/perkShard/${rune}.png`}
            />
          )
        )}
      </StatsPerksImgBox>
    </StatsPerksLayout>
  );
};

const offenseLine = [5008, 5005, 5007];
const flexLine = [5008, 5002, 5003];
const defenseLine = [5001, 5002, 5003];

export default StatsPerks;
