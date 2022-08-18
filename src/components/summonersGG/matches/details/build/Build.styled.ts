import styled from 'styled-components';

export const BuildLayout = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
`;

export const BuildDivider = styled.div`
  align-self: flex-start;
  width: 1px;
  height: 180px;
  background-color: #1c1c1f;
  margin: 30px 12px;
  /* padding: 30px 0; */
`;

export const BuildPerksBox = styled.div`
  position: relative;
  padding: 30px 0;
`;

export const BuildText = styled.div`
  position: absolute;
  font-family: 'Roboto', sans-serif;
  /* top: 16px; */
  bottom: 0px;
  left: 0px;
  width: 100%;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  color: #9e9eb1;
  font-weight: normal;
`;
