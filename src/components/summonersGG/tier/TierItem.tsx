import React from "react";
import { SummonerTier } from "features/summonersList/summonerTierSlice";
import {
  TierImg,
  TierLayout,
  TierQueue,
  TierRank,
  TierTier,
} from "./TierItem.styled";
import toCapitalize from "util/toCapitalize";
import { RIOT_RANK_EMBLEM } from "services/cdnValue";

interface TierProps {
  tierInfo: SummonerTier;
}

const TierItem = ({ tierInfo }: TierProps) => {
  console.log(tierInfo);
  return (
    <TierLayout>
      {tierInfo.queueType === "RANKED_SOLO_5x5" && (
        <TierQueue>Ranked Solo</TierQueue>
      )}
      {tierInfo.queueType === "RANKED_FLEX_5x5" && (
        <TierQueue>Ranked Flex</TierQueue>
      )}
      <TierImg src={`${RIOT_RANK_EMBLEM}/${tierInfo.tier.toLowerCase()}.png`} />
      <TierTier>{toCapitalize(tierInfo.tier)}</TierTier>
      {tierInfo.rank ===
        ("IRON" || "SILVER" || "GOLD" || "PLATINUM" || "DIAMOND") && (
        <TierRank> {tierInfo.rank}</TierRank>
      )}
    </TierLayout>
  );
};
export default TierItem;
