import React from 'react';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/store';
import getSummonerTier from 'api/getSummonerTier';
import TierItem from './TierItem';
import { TierBox, TierLayout, TierQueueType } from './Tier.styled';
import { useState } from 'react';
import { SummonerTier } from 'features/riot/summonerTierSlice';

const Tier = () => {
  const { tierData, loading, error } = useAppSelector(
    (state) => state.summonerTier
  );

  const { summonerData } = useAppSelector((state) => state.summonerInfo);
  const dispatch = useAppDispatch();

  const [soloRank, setSoloRank] = useState<SummonerTier>();
  const [flexRank, setFlexRank] = useState<SummonerTier>();

  useEffect(() => {
    if (summonerData.id) {
      dispatch(getSummonerTier(summonerData.id));
    }
  }, []);

  useEffect(() => {
    if (tierData) {
      setSoloRank(
        tierData.filter((data) => data.queueType === 'RANKED_SOLO_5x5')[0]
      );
      setFlexRank(
        tierData.filter((data) => data.queueType === 'RANKED_FLEX_5x5')[0]
      );
    }
  }, [tierData]);

  return (
    <TierLayout>
      {loading === 'pending' ? (
        'Loading'
      ) : error ? (
        'error'
      ) : (
        <TierLayout>
          <TierBox>
            <TierQueueType>Ranked Solo</TierQueueType>
            {soloRank && <TierItem tierInfo={soloRank} />}
          </TierBox>
          <TierBox>
            <TierQueueType>Ranked Flex</TierQueueType>
            {flexRank && <TierItem tierInfo={flexRank} />}
          </TierBox>
        </TierLayout>
      )}
    </TierLayout>
  );
};
export default Tier;
