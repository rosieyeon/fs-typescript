import React, { useEffect, useState } from 'react';

import { useAppSelector } from 'app/store';
import { RIOT_ICON } from 'services/riot/cdnValue';
import {
  ProfileIcon,
  ProfileImg,
  ProfileLayout,
  ProfileLevel,
  ProfileLevelBox,
  ProfileName,
  ProfilePlayer,
  ProfileText,
} from './Profile.styled';
import toCapitalize from 'utils/toCapitalize';
import { t1Players } from 'app/t1Players';

const Profile = () => {
  const [player, setPlayer] = useState('');
  const { summonerData } = useAppSelector((state) => state.summonerInfo);

  useEffect(() => {
    if (summonerData.id) {
      const playerData = t1Players?.filter(
        (player) => summonerData.id === player.id
      );

      setPlayer(playerData[0].player);
    }
  }, [summonerData.id]);

  return (
    <ProfileLayout>
      <ProfileImg>
        <ProfileIcon
          src={`${RIOT_ICON}/profileIcon${summonerData.profileIconId}.jpg`}
        />
        <ProfileLevelBox>
          <ProfileLevel>{summonerData.summonerLevel}</ProfileLevel>
        </ProfileLevelBox>
      </ProfileImg>
      <ProfileText>
        <ProfileName>{summonerData.name}</ProfileName>
        {player && <ProfilePlayer>T1 {toCapitalize(player)}</ProfilePlayer>}
      </ProfileText>
    </ProfileLayout>
  );
};

export default Profile;
