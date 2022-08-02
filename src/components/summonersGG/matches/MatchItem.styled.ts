import styled from "styled-components";

export const MatchItemLayout = styled.div<{ winlose: boolean }>`
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  width: 740px;
  height: 96px;
  border-radius: 4px;
  border-left-width: 6px;
  border-left-style: solid;
  border-left-color: ${(props) => (props.winlose ? "#5383e8" : "#e84057")};
  background-color: ${(props) => (props.winlose ? "#28344e" : "#59343b")};

  margin-bottom: 8px;
`;

export const MatchItemInfoBox = styled.div``;

export const MatchItemInfo = styled.div`
  display: flex;
`;

export const MatchItemKDA = styled.div<{ winlose: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 107px;
  padding-right: 12px;
  margin-right: 8px;
  margin-left: 12px;

  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${(props) => (props.winlose ? "#2f436e" : "#703C47")};
`;
export const MatchItemKDACnt = styled.div`
  color: #7b7a8e;
`;
export const MatchItemKillAssis = styled.span`
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: white;
`;
export const MatchItemDeaths = styled.span`
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #e84057;
`;
export const MatchItemKDARatio = styled.div`
  line-height: 16px;
  color: #9e9eb1;
  font-size: 12px;
`;

export const MatchItemItemBox = styled.div`
  display: flex;
  gap: 1px;
  margin-top: 8px;
`;
export const MatchItemSlot = styled.div<{ winlose: boolean }>`
  width: 22px;
  height: 22px;
  margin-left: 2px;
  border-radius: 4px;
  background-color: ${(props) => (props.winlose ? "#2F436E" : "#703C47")};
`;
export const MatchItemItem = styled.img`
  max-width: 100%;
  border-radius: 4px;
`;

export const MatchItemDetailBox = styled.div`
  font-size: 11px;
  color: #9e9eb1;
  line-height: 12.5px;
`;
export const MatchItemPKill = styled.div`
  color: #e84057;
`;
export const MatchItemStats = styled.div``;
export const MatchItemLane = styled.div`
  font-weight: bold;
`;
