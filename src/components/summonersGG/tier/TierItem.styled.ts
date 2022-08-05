import styled from 'styled-components';

export const TierItemLayout = styled.div`
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
  background-color: #31313c;
  width: 332px;

  display: flex;
  align-items: center;
  padding: 12px;
  border-top-width: 1px;
  border-top-style: solid;
  border-color: #1c1c1f;
`;
export const TierImgBox = styled.div`
  border-radius: 50%;
  background-color: #282830;
  width: 72px;
  height: 72px;
`;
export const TierImg = styled.img`
  width: 72px;
  height: 72px;
`;

export const TierRankBox = styled.div`
  margin-left: 16px;
  width: 147px;
`;
export const TierTier = styled.span`
  line-height: 26px;
  font-size: 20px;
  font-weight: bold;
`;

export const TierPoint = styled.div`
  line-height: 16px;
  margin-top: 2px;
  font-size: 12px;
  color: #9e9eb1;
`;

export const TierWinBox = styled.div`
  font-size: 12px;
  text-align: right;
  color: #7b7a8e;
`;
export const TierWinLose = styled.div`
  line-height: 26px;
`;
export const TierWinRates = styled.div`
  line-height: 16px;
`;
