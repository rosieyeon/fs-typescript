import getSummonerInfo from "api/getSummonerInfo";
import { useAppDispatch, useAppSelector } from "app/store";
import Profile from "components/summonersGG/profile/Profile";
import Tier from "components/summonersGG/tier/Tier";
import { getSummonerName } from "features/summonerNameSlice";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SummonerGGLayout } from "./SummonerGG.styled";

export const t1Player = [
  { player: "zeus", name: "자연계곡나무하늘" },
  { player: "oner", name: "아 니 맞나" },
  { player: "faker", name: "hide on bush" },
  { player: "gumayusi", name: "T1 Gumayusi" },
  { player: "keria", name: "역천괴" },
];

const SummonerGG = () => {
  const { summonerData, loading, error } = useAppSelector(
    (state) => state.summonerInfo
  );

  console.log(summonerData, loading, error);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    t1Player.map(
      (lolplayer) =>
        pathname.substr(1) === lolplayer.player &&
        dispatch(getSummonerInfo(lolplayer.name))
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getSummonerName({
        player: `${pathname.substr(1)}`,
        name: `${summonerData.name}`,
      })
    );
  }, [summonerData.name]);

  return (
    <SummonerGGLayout>
      <Profile />
      <Tier />
    </SummonerGGLayout>
  );
};

export default SummonerGG;
