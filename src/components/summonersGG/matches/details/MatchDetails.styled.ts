import styled from "styled-components";

export const DetailsLayout = styled.div`
  font-family: "Roboto", sans-serif;
`;
export const DetailsTable = styled.table`
  width: 740px;
`;
export const DetailsThead = styled.thead``;
export const DetailsTr = styled.tr<{ win: boolean }>`
  /* background-color: #2f436e; */
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
export const DetailsTBody = styled.tbody``;
export const DetailWinLose = styled.td`
  font-weight: bold;
  text-align: left;
  vertical-align: middle;
  padding-left: 15px;
`;
