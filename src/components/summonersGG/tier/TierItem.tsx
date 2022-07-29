import React from "react";
import { SummonerTier } from "features/summonersList/summonerTierSlice";
import { TierLayout, TierRank, TierTier } from "./TierItem.styled";
import toCapitalize from "util/toCapitalize";

interface TierProps {
  tierInfo: SummonerTier;
}

const TierItem = ({ tierInfo }: TierProps) => {
  console.log(tierInfo);
  return (
    <TierLayout>
      <TierTier>{toCapitalize(tierInfo.tier)}</TierTier>
      <TierRank> {tierInfo.rank}</TierRank>
    </TierLayout>
  );
};
export default TierItem;
