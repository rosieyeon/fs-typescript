import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { t1Player } from "app/t1Player";

const Summoners: React.FC = () => {
  const navigate = useNavigate();
  const t1PlayerList = t1Player;

  const onClickNav = (player: string) => {
    navigate(`/${player}`);
  };

  // useEffect(() => {
  //   dispatch(getSummonerInfo("싫어하는이유"));
  // }, []);

  return (
    <>
      {t1PlayerList.map((t1Player, idx) => (
        <button key={idx} onClick={() => onClickNav(`${t1Player.player}`)}>
          {t1Player.player}
        </button>
      ))}
      <Link to="/faker">Faker</Link>
      <Link to="/zeus">Zeus</Link>
      <Link to="/oner">Oner</Link>
      <Link to="/gumayusi">Gumayusi</Link>
      <Link to="/keria">Keria</Link>
    </>
  );
};

export default Summoners;
