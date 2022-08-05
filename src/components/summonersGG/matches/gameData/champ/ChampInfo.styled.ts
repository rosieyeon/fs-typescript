import styled from 'styled-components';

export const ChampInfoLayout = styled.div`
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
`;
export const ChampInfoImg = styled.img`
  display: block;

  max-width: 100%;
  border-radius: 50%;
`;
export const ChampInfoLV = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 11px;
  background: rgb(32, 45, 55);
`;
