import styled from 'styled-components';

export const ObjBarLayout = styled.div`
  /* position: relative; */
  font-family: 'Roboto', sans-serif;
`;

export const ObjBarBackground = styled.div<{ win: boolean }>`
  width: 405px;
  height: 16px;
  background-color: brown;
  background-color: ${(props) => (props.win ? '#e84057' : '#5383E8')};
  margin: 8px 0px;
`;

interface progressProps {
  per: number;
  win: boolean;
}
export const ObjBarProgress = styled.div<progressProps>`
  width: ${(props) => props.per * 100}%;
  background-color: ${(props) => (props.win ? '#5383E8' : '#e84057')};
  margin-right: 50%;
`;
export const ObjBarTextBox = styled.div`
  width: 405px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  line-height: 16px; ;
`;
export const ObjBarText = styled.div`
  padding: 0 8px;
`;
