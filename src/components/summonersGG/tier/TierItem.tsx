import React from "react";
import { SummonerTier } from "features/summonersList/summonerTierSlice";
import {
  TierImg,
  TierImgBox,
  TierLayout,
  TierPoint,
  TierRankBox,
  TierTier,
  TierWinBox,
  TierWinLose,
  TierWinRates,
} from "./TierItem.styled";
import toCapitalize from "util/toCapitalize";
import { RIOT_RANK_EMBLEM } from "services/cdnValue";

interface TierProps {
  tierInfo: SummonerTier;
}

const TierItem = ({ tierInfo }: TierProps) => {
  const winRates = (tierInfo.wins / (tierInfo.wins + tierInfo.losses)) * 100;

  return (
    <TierLayout>
      <TierImgBox>
        <TierImg
          src={`${RIOT_RANK_EMBLEM}/${tierInfo.tier.toLowerCase()}.png`}
        />
      </TierImgBox>
      <TierRankBox>
        <TierTier>{toCapitalize(tierInfo.tier)}</TierTier>
        {tierInfo.rank ===
          ("IRON" || "SILVER" || "GOLD" || "PLATINUM" || "DIAMOND") && (
          <TierTier> {tierInfo.rank}</TierTier>
        )}
        <TierPoint>
          {tierInfo.leaguePoints.toLocaleString("ko-KR")} LP
        </TierPoint>
      </TierRankBox>
      <TierWinBox>
        <TierWinLose>
          {tierInfo.wins}W {tierInfo.losses}L
        </TierWinLose>
        <TierWinRates>{parseInt(String(winRates))}%</TierWinRates>
      </TierWinBox>
    </TierLayout>
  );
};
export default TierItem;
