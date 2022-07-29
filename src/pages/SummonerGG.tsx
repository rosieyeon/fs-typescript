import getSummonerInfo from "api/getSummonerInfo";
import { useAppDispatch, useAppSelector } from "app/store";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  }, []);

  return <>hi</>;
};

export default SummonerGG;
