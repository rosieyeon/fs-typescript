import styled from "styled-components";

export const MatchItemDiv = styled.div``;

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

export const MatchItemGameData = styled.div``;

export const MatchItemMore = styled.div<{ winlose: boolean }>`
  position: relative;
  width: 40px;
  height: 96px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${(props) => (props.winlose ? "#2f436e" : "#703c47")};
`;

export const MatchItemMoreBtn = styled.img`
  position: absolute;
  bottom: 8px;
  left: 8px;
  cursor: pointer;
`;

export const MatchDetailLayout = styled.div`
  margin-bottom: 16px;
`;
