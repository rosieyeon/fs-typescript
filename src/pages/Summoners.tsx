import React from "react";

import { useNavigate } from "react-router-dom";
import { t1Player } from "app/t1Player";
import { SummonersLayout, SummonersLogo } from "./Summoners.styled";

const Summoners: React.FC = () => {
  const navigate = useNavigate();
  const t1PlayerList = t1Player;

  const onClickNav = (player: string) => {
    navigate(`/${player}`);
  };

  return (
    <SummonersLayout>
      <SummonersLogo src="images/logo/t1.jpeg" />
      {t1PlayerList.map((t1Player, idx) => (
        <button key={idx} onClick={() => onClickNav(`${t1Player.player}`)}>
          {t1Player.player}
        </button>
      ))}
    </SummonersLayout>
  );
};

export default Summoners;
