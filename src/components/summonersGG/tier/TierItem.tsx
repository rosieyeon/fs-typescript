import React from "react";
import { SummonerTier } from "features/summonersList/summonerTierSlice";
import { TierImg, TierLayout, TierRank, TierTier } from "./TierItem.styled";
import toCapitalize from "util/toCapitalize";

interface TierProps {
  tierInfo: SummonerTier;
}

const TierItem = ({ tierInfo }: TierProps) => {
  console.log(tierInfo);
  return (
    <TierLayout>
      <TierImg src={`/images/ranked-emblems/${tierInfo.tier}.png`} />
      <TierTier>{toCapitalize(tierInfo.tier)}</TierTier>
      {tierInfo.rank ===
        ("IRON" || "SILVER" || "GOLD" || "PLATINUM" || "DIAMOND") && (
        <TierRank> {tierInfo.rank}</TierRank>
      )}
    </TierLayout>
  );
};
export default TierItem;
