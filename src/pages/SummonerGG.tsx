import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/store';

import { t1Player } from 'app/t1Player';
import {
  SummonerGGData,
  SummonerGGLayout,
  SummonerGGStatistics,
} from './SummonerGG.styled';
import Profile from 'components/summonersGG/profile/Profile';
import Tier from 'components/summonersGG/tier/Tier';
import Matches from 'components/summonersGG/matches/Matches';
import MostChamp from 'components/summonersGG/mostChamp/MostChamp';
import { getSummonerInfo } from 'features/riot/summonerInfoSlice';

const SummonerGG = () => {
  const { loading, error } = useAppSelector((state) => state.summonerInfo);

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    t1Player.map(
      (lolplayer) =>
        pathname.substr(11) === lolplayer.player &&
        dispatch(getSummonerInfo(lolplayer.id))
    );
  }, [dispatch, pathname]);

  return (
    <>
      {loading === 'pending' ? (
        'LOADING'
      ) : error ? (
        'ERROR'
      ) : (
        <SummonerGGLayout>
          <Profile />
          <SummonerGGData>
            <SummonerGGStatistics>
              <Tier />
              <MostChamp />
            </SummonerGGStatistics>
            <Matches />
          </SummonerGGData>
        </SummonerGGLayout>
      )}
    </>
  );
};

export default SummonerGG;
