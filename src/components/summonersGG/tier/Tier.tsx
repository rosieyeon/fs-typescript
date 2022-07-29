import React from "react";

import { useAppDispatch, useAppSelector } from "app/store";
import { TierLayout, TierRank, TierTier } from "./Tier.styled";
import { useEffect } from "react";
import getSummonerTier from "api/getSummonerTier";

const Tier = () => {
  const { tierData, loading, error } = useAppSelector(
    (state) => state.summonerTier
  );
  const { summonerData } = useAppSelector((state) => state.summonerInfo);
  const dispatch = useAppDispatch();
  // console.log(summonerData);
  useEffect(() => {
    dispatch(getSummonerTier(summonerData.id));
  }, [dispatch]);

  return (
    <TierLayout>
      <TierTier></TierTier>
      <TierRank></TierRank>
    </TierLayout>
  );
};
export default Tier;
