import styled from 'styled-components';

interface isMeProps {
  me: boolean;
  win: boolean;
}
export const DetailTR = styled.tr<isMeProps>`
  font-family: 'Roboto', sans-serif;
  vertical-align: middle;
  height: 41.5px;
  background-color: ${(props) =>
    !props.me ? '' : props.win ? '#2f436e' : '#703c47'};
`;
export const DetailTD = styled.td`
  text-align: center;
  vertical-align: middle;
`;
export const DetailContents = styled.div`
  display: flex;
  vertical-align: middle;
  align-items: center;
  padding-left: 15px;
`;
export const DetailSummoner = styled.div`
  padding: 4px 0 3px 5px;
`;
export const DetailName = styled.div`
  font-size: 12px;
  line-height: 16px;
  text-align: left;
`;
export const DetailTier = styled.div`
  font-size: 11px;
  line-height: 14px;
  color: #7b7a8e;
  text-align: left;
`;

export const DetailKDA = styled.div`
  font-size: 11px;
  line-height: 14px;
  color: #9e9eb1;
  padding: 0 5px;
`;
export const DetailKDARatio = styled.div<{ ratio: string }>`
  font-size: 11px;
  font-weight: bold;
  color: ${(props) => props.ratio};
`;

export const DetailDamage = styled.div`
  display: flex;
  justify-content: center;
  font-size: 11px;
  line-height: 14px;
  color: #9e9eb1;
`;
export const DetailDamageBox = styled.div`
  width: 50px;
  margin: 0 4px;
`;
export const DetailDamageTxt = styled.span`
  line-height: 14px;
`;
export const DetailDamageBar = styled.div`
  background-color: #31313c;
  width: 50px;
  height: 6px;
  margin-top: 4px;
`;

interface graphProps {
  per: number;
  taken: boolean;
}
export const DetailDamageFill = styled.div<graphProps>`
  background-color: ${(props) => (props.taken ? '#e84057' : '#7b7a8e')};
  height: 6px;
  width: ${(props) => props.per}%;
`;

export const DetailWard = styled.div`
  font-size: 11px;
  line-height: 14px;
  color: #9e9eb1;
  padding: 0 10px;
`;

export const DetailCS = styled.div`
  font-size: 11px;
  line-height: 14px;
  color: #9e9eb1;
  padding: 0 5px;
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: center;
`;
