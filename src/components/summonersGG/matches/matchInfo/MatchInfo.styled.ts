import styled from "styled-components";

export const MatchInfoLayout = styled.div`
  color: #9e9eb1;
  width: 105px;
  font-size: 12px;
  line-height: 16px;

  margin-left: 12px;
`;
export const MatchInfoQueueType = styled.div<{ winlose: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.winlose ? "#5383e8" : "#e84057")};
`;
export const MatchInfoTime = styled.div``;
export const MatchInfoBar = styled.div<{ winlose: boolean }>`
  width: 48px;
  height: 1px;
  margin: 8px 0px 4px;
  background-color: ${(props) => (props.winlose ? "#2f436e" : "#703C47")};
`;
export const MatchInfoWinLose = styled.div`
  font-weight: bold;
`;
