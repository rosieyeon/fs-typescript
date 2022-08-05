import React from 'react';
import { SummonerTier } from 'features/riot/summonerTierSlice';
import {
  TierImg,
  TierImgBox,
  TierItemLayout,
  TierPoint,
  TierRankBox,
  TierTier,
  TierWinBox,
  TierWinLose,
  TierWinRates,
} from './TierItem.styled';
import toCapitalize from 'utils/toCapitalize';
import { RIOT_RANK_EMBLEM } from 'services/cdnValue';

interface TierProps {
  tierInfo: SummonerTier;
}

const TierItem = ({ tierInfo }: TierProps) => {
  const winRates = (tierInfo.wins / (tierInfo.wins + tierInfo.losses)) * 100;

  return (
    <TierItemLayout>
      <TierImgBox>
        <TierImg
          src={`${RIOT_RANK_EMBLEM}/${tierInfo.tier.toLowerCase()}.png`}
        />
      </TierImgBox>
      <TierRankBox>
        <TierTier>{toCapitalize(tierInfo.tier)}</TierTier>
        {tierInfo.rank ===
          ('IRON' || 'SILVER' || 'GOLD' || 'PLATINUM' || 'DIAMOND') && (
          <TierTier> {tierInfo.rank}</TierTier>
        )}
        <TierPoint>
          {tierInfo.leaguePoints.toLocaleString('ko-KR')} LP
        </TierPoint>
      </TierRankBox>
      <TierWinBox>
        <TierWinLose>
          {tierInfo.wins}W {tierInfo.losses}L
        </TierWinLose>
        <TierWinRates>{parseInt(String(winRates))}%</TierWinRates>
      </TierWinBox>
    </TierItemLayout>
  );
};
export default TierItem;
