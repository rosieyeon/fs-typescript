import React from 'react';
import { useNavigate } from 'react-router-dom';

import { t1Players } from 'app/t1Players';
import {
  SummonersBox,
  SummonersImg,
  SummonersLayout,
  SummonersList,
  SummonersLogo,
  SummonersName,
} from './Summoners.styled';
import toCapitalize from 'utils/toCapitalize';

const Summoners: React.FC = () => {
  const navigate = useNavigate();
  const t1PlayerList = t1Players;

  const onClickNav = (player: string) => {
    navigate(`/summoners/${player}`);
  };

  return (
    <SummonersLayout>
      <SummonersLogo src="images/logo/t1.jpeg" />
      <SummonersList>
        {t1PlayerList.map((t1Player, idx) => (
          <SummonersBox key={idx} sec={idx}>
            <SummonersImg
              src={`/images/players/${t1Player.player}.jpg`}
              onClick={() => onClickNav(`${t1Player.player}`)}
            />
            <SummonersName
              key={idx}
              onClick={() => onClickNav(`${t1Player.player}`)}
            >
              {toCapitalize(t1Player.player)}
            </SummonersName>
          </SummonersBox>
        ))}
      </SummonersList>
    </SummonersLayout>
  );
};

export default Summoners;
