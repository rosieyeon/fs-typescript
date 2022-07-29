import React from "react";
import { useEffect } from "react";

import getSummonerInfo from "api/getSummonerInfo";
import { useAppDispatch, useAppSelector } from "app/store";

const Summoners: React.FC = () => {
  const { summonerData, loading, error } = useAppSelector(
    (state) => state.summonerInfo
  );
  console.log(summonerData, loading, error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSummonerInfo("hide on bush"));
  }, []);

  return <>summoners</>;
};

export default Summoners;
