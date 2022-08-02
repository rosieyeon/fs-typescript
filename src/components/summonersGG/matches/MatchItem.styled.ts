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
