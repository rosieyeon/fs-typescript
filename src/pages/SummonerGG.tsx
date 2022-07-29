import getSummonerInfo from "api/getSummonerInfo";
import getSummonerTier from "api/getSummonerTier";
import { useAppDispatch, useAppSelector } from "app/store";
import Tier from "components/summonersGG/tier/Tier";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RIOT_ICON } from "services/cdnValue";
import {
  SummonerGGIcon,
  SummonerGGLayout,
  SummonerGGLevel,
  SummonerGGName,
} from "./SummonerGG.styled";

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

  // console.log(summonerData, loading, error);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    t1Player.map(
      (lolplayer) =>
        pathname.substr(1) === lolplayer.player &&
        dispatch(getSummonerInfo(lolplayer.name))
    );
  }, []);

  useEffect(() => {
    dispatch(getSummonerTier("Ltc8nxpnPYmsTMNzLjR7styggH7Q_5_u8CsO3_Y8XTtXSQ"));
  }, [dispatch]);

  const { tierData } = useAppSelector((state) => state.summonerTier);
  console.log(tierData);
  return (
    <SummonerGGLayout>
      <SummonerGGIcon
        src={`${RIOT_ICON}/profileIcon${summonerData.profileIconId}.jpg`}
      />
      <SummonerGGLevel>{summonerData.summonerLevel}</SummonerGGLevel>
      <SummonerGGName>{summonerData.name}</SummonerGGName>
      <Tier />
    </SummonerGGLayout>
  );
};

export default SummonerGG;
