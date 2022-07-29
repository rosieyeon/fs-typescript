import React from "react";

import { useAppDispatch, useAppSelector } from "app/store";
import { useEffect } from "react";
import getSummonerTier from "api/getSummonerTier";
import TierItem from "./TierItem";

const Tier = () => {
  const { tierData, loading, error } = useAppSelector(
    (state) => state.summonerTier
  );
  const { summonerData } = useAppSelector((state) => state.summonerInfo);
  const dispatch = useAppDispatch();
  console.log(summonerData.id);

  useEffect(() => {
    if (summonerData.id) {
      dispatch(getSummonerTier(summonerData.id));
    }
  }, [summonerData.id]);

  return (
    <>
      {tierData.map((tier, idx) => (
        <TierItem key={idx} tierInfo={tier} />
      ))}
    </>
  );
};
export default Tier;
