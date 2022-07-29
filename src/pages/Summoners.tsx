import React from "react";
import { useEffect } from "react";

import getSummonerInfo from "api/getSummonerInfo";
import { useAppDispatch, useAppSelector } from "app/store";
import { Link } from "react-router-dom";

const Summoners: React.FC = () => {
  const { summonerData, loading, error } = useAppSelector(
    (state) => state.summonerInfo
  );
  // console.log(summonerData, loading, error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSummonerInfo("hide on bush"));
  }, []);

  return (
    <>
      <Link to="/faker">Faker</Link>
      <Link to="/zeus">Zeus</Link>
      <Link to="/oner">Oner</Link>
      <Link to="/gumayusi">Gumayusi</Link>
      <Link to="/keria">Keria</Link>
    </>
  );
};

export default Summoners;
