import React from 'react';

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
  const { summonerData } = useAppSelector((state) => state.summonerInfo);
  const player = t1Players.filter((player) => summonerData.id === player.id)[0]
    .player;

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
        <ProfilePlayer>T1 {toCapitalize(player)}</ProfilePlayer>
      </ProfileText>
    </ProfileLayout>
  );
};

export default Profile;
