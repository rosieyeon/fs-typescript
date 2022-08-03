import styled from "styled-components";

export const ProfileLayout = styled.div`
  display: flex;
  align-items: flex-end;
  width: 1096px;
  font-family: "Roboto", sans-serif;
  padding: 40px 0;
`;

export const ProfileImg = styled.div`
  position: relative;
  width: 100px;
`;

export const ProfileIcon = styled.img`
  border-radius: 20px;
  vertical-align: middle;
  max-width: 100%;
`;

export const ProfileLevelBox = styled.div`
  height: 20px;
  margin-top: -11px;
  text-align: center;
`;

export const ProfileLevel = styled.span`
  display: inline-block;
  padding: 0 8px;
  border-radius: 10px;
  background-color: #202d37;
  line-height: 20px;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
`;

export const ProfileText = styled.div`
  padding: 20px 16px;
`;
export const ProfileName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const ProfilePlayer = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #9e9eb1;
`;
