import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import TierItem from './TierItem';
import { getSummonerTier, SummonerTier } from 'features/riot/summonerTierSlice';
import { TierBox, TierLayout, TierQueueType } from './Tier.styled';

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
  }, [dispatch, summonerData.id]);

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
