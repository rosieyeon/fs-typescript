import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { t1Player } from "app/t1Player";
import { SummonersLayout, SummonersLogo } from "./Summoners.styled";

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
    <SummonersLayout>
      <SummonersLogo src="images/logo/t1.jpeg" />
      {t1PlayerList.map((t1Player, idx) => (
        <button key={idx} onClick={() => onClickNav(`${t1Player.player}`)}>
          {t1Player.player}
        </button>
      ))}
      {/* <Link to="/summoners/faker">Faker</Link>
      <Link to="/zeus">Zeus</Link>
      <Link to="/oner">Oner</Link>
      <Link to="/gumayusi">Gumayusi</Link>
      <Link to="/keria">Keria</Link> */}
    </SummonersLayout>
  );
};

export default Summoners;
