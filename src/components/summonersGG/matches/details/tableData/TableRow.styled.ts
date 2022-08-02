import styled, { css } from "styled-components";

export const DetailTR = styled.tr`
  font-family: "Roboto", sans-serif;
  vertical-align: middle;
  height: 41.5px;
`;
export const DetailTD = styled.td`
  /* width: 98px; */
  text-align: center;
  /* white-space: nowrap; */
  vertical-align: middle;
  /* padding: 4px 0px 3px; */
`;
export const DetailContents = styled.td`
  display: flex;
  vertical-align: middle;
  align-items: center;
  /* padding-top: 5px; */
  /* width: 175px; */
`;
export const DetailSummoner = styled.td`
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
  /* white-space: nowrap; */
  /* vertical-align: middle; */
`;
export const DetailKDARatio = styled.div<{ ratio: string }>`
  font-size: 11px;
  font-weight: bold;
  color: ${(props) => props.ratio};
`;

export const DetailDamage = styled.td`
  display: flex;
  width: 120px;
  font-size: 11px;
  line-height: 14px;
  color: #9e9eb1;
  /* vertical-align: middle; */
`;
export const DetailDamageBox = styled.div`
  width: 50px;
  text-align: center;
  margin: 0 4px;
  /* vertical-align: middle; */
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
  background-color: ${(props) => (props.taken ? "#e84057" : "#7b7a8e")};
  height: 6px;
  width: ${(props) => props.per}%;
`;

export const DetailWard = styled.div`
  font-size: 11px;
  line-height: 14px;
  color: #9e9eb1;
`;

export const DetailCS = styled.div`
  font-size: 11px;
  line-height: 14px;
  color: #9e9eb1;
`;
