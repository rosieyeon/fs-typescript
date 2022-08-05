import styled from 'styled-components';

export const MostChampItemLayout = styled.div`
  display: flex;
  width: 332px;
  height: 48px;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding: 0 8px;

  background-color: #31313c;
  border-bottom: 1px solid #1c1c1f;
`;
export const MostChampFace = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const MostChampBox = styled.div`
  width: 100px;
  padding: 0 8px;

  text-align: center;
`;

export const MostChampName = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: white;

  text-align: left;
`;

export const MostChampCS = styled.div`
  font-size: 11px;
  color: #7b7a8e;
  margin-top: 2px;
  text-align: left;
`;

export const MostChampBottom = styled.div`
  margin-top: 2px;
  font-size: 11px;
  white-space: nowrap;
  color: #7b7a8e;
`;
export const MostChampKDA = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: #9e9eb1;
`;

export const MostChampKDARatio = styled.span``;

export const MostChampWinRate = styled.div`
  font-size: 12px;
  color: #9e9eb1;
  text-align: right;
`;
export const MostChampPlayed = styled.div`
  margin-top: 2px;
  font-size: 11px;
  white-space: nowrap;
  color: #7b7a8e;

  text-align: right;
`;
