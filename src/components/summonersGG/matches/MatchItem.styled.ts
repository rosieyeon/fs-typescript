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

export const MatchItemInfo = styled.div``;
export const MatchItemParticipants = styled.div``;
