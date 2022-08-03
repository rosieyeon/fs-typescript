import styled from "styled-components";

export const DetailsLayout = styled.div`
  font-family: "Roboto", sans-serif;
`;
export const DetailsTable = styled.table`
  width: 740px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #31313c;
`;
export const DetailsThead = styled.thead``;
export const DetailsTr = styled.tr<{ win: boolean }>`
  height: 32px;
  font-size: 12px;
  font-weight: normal;
  text-align: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => (props.win ? "#2f436e" : "#703c47")};
  color: #7b7a8e;
`;
export const DetailsTh = styled.th`
  vertical-align: middle;
`;
export const DetailsTBody = styled.tbody<{ win: boolean }>`
  background-color: ${(props) => (props.win ? "#28344e" : "#593438")};
`;
export const DetailWinLose = styled.td`
  font-weight: bold;
  text-align: left;
  vertical-align: middle;
  padding-left: 15px;
`;
