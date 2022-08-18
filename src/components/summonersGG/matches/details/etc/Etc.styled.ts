import styled, { css } from 'styled-components';

export const EtcLayout = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: black;

  background-color: #282830;
`;
export const EtcCategoryBox = styled.div`
  display: flex;
  height: 36px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #31313c;
`;
export const EtcCategory = styled.button<{ selected: boolean }>`
  display: block;
  width: 100%;
  height: 36px;
  padding: 0px;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.selected
      ? css`
          color: #5383e8;
          font-weight: bold;
          border-bottom-width: 2px;
          border-bottom-style: solid;
          border-color: #5383e8;
        `
      : css`
          border: none;
          color: white;
        `}
`;
