import React from "react";

import { useAppSelector } from "app/store";
import { RIOT_ICON } from "services/cdnValue";
import {
  ProfileIcon,
  ProfileImg,
  ProfileLayout,
  ProfileLevel,
  ProfileLevelBox,
  ProfileName,
  ProfilePlayer,
} from "./Profile.styled";
import toCapitalize from "util/toCapitalize";

const Profile = () => {
  const { summonerData } = useAppSelector((state) => state.summonerInfo);
  const { user } = useAppSelector((state) => state.summonerName);
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
      <ProfileName>{summonerData.name}</ProfileName>
      <ProfilePlayer>T1 {toCapitalize(user.player)}</ProfilePlayer>
    </ProfileLayout>
  );
};

export default Profile;
