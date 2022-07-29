import React from "react";

import { useAppSelector } from "app/store";
import { RIOT_ICON } from "services/cdnValue";
import {
  ProfileIcon,
  ProfileLayout,
  ProfileLevel,
  ProfileName,
} from "./Profile.styled";

const Profile = () => {
  const { summonerData } = useAppSelector((state) => state.summonerInfo);
  return (
    <ProfileLayout>
      <ProfileIcon
        src={`${RIOT_ICON}/profileIcon${summonerData.profileIconId}.jpg`}
      />
      <ProfileLevel>{summonerData.summonerLevel}</ProfileLevel>
      <ProfileName>{summonerData.name}</ProfileName>
    </ProfileLayout>
  );
};

export default Profile;
