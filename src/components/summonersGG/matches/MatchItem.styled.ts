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

export const MatchItemGame = styled.div`
  color: #9e9eb1;
  font-size: 12px;
  line-height: 16px;

  margin-left: 12px;
`;

export const MatchItemBar = styled.div<{ winlose: boolean }>`
  width: 48px;
  height: 1px;
  margin: 8px 0px 4px;
  background-color: ${(props) => (props.winlose ? "#2f436e" : "#703C47")};
`;

export const MatchItemQueueType = styled.div<{ winlose: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.winlose ? "#5383e8" : "#e84057")};
`;

export const MatchItemTime = styled.div``;
export const MatchItemWinLose = styled.div`
  font-weight: bold;
`;

export const MatchItemInfo = styled.div`
  display: flex;
`;

export const MatchItemChamp = styled.div`
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
`;
export const MatchItemChampImg = styled.img`
  display: block;

  max-width: 100%;
  border-radius: 50%;
`;
export const MatchItemChampLv = styled.span`
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
export const MatchItemSpellBox = styled.div`
  margin-left: 4px;
`;
export const MatchItemSpell = styled.img`
  display: block;
  width: 22px;
  height: 22px;
  margin-bottom: 2px;
  border-radius: 4px;
`;

export const MatchItemPerksBox = styled.div``;
export const MatchItemPerk = styled.img`
  display: block;
  margin-bottom: 2px;
  width: 22px;
  height: 22px;
  margin-bottom: 2px;
  border-radius: 50%;

  background-color: black;
`;

export const MatchItemItemBox = styled.div`
  display: flex;
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
`;

export const MatchItemParticipants = styled.div``;
