import styled from "styled-components";

export const ItemsLayout = styled.div`
  display: flex;
  gap: 1px;
  margin-top: 8px;
`;
export const ItemsSlot = styled.div<{ winlose: boolean }>`
  width: 22px;
  height: 22px;
  margin-left: 2px;
  border-radius: 4px;
  background-color: ${(props) => (props.winlose ? "#2F436E" : "#703C47")};
`;
export const ItemsImg = styled.img`
  max-width: 100%;
  border-radius: 4px;
`;
