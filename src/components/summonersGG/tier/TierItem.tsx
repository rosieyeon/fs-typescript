import React from "react";
import { SummonerTier } from "features/summonersList/summonerTierSlice";
import {
  TierContent,
  TierImg,
  TierImgBox,
  TierLayout,
  TierPoint,
  TierQueue,
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
  console.log(tierInfo);
  const winRates = (tierInfo.wins / (tierInfo.wins + tierInfo.losses)) * 100;

  return (
    <TierLayout>
      {tierInfo.queueType === "RANKED_SOLO_5x5" && (
        <TierQueue>Ranked Solo</TierQueue>
      )}
      {tierInfo.queueType === "RANKED_FLEX_5x5" && (
        <TierQueue>Ranked Flex</TierQueue>
      )}
      <TierContent>
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
      </TierContent>
    </TierLayout>
  );
};
export default TierItem;
