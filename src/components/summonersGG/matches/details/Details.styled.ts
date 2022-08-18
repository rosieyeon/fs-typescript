import styled from 'styled-components';

export const DetailsLayout = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-bottom: 16px;
`;
export const DetailsCategoryButtonBox = styled.div`
  display: flex;
  gap: 8px;
  height: 36px;
  margin: 4px 0;
  padding: 4px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #31313c;
`;

export const DetailsCategoryButton = styled.button<{ selected: boolean }>`
  font-family: 'Roboto', sans-serif;
  display: block;
  width: 100%;
  height: 28px;
  padding: 0px;
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? 'rgb(81, 81, 99)' : '#31313c'};
  font-weight: ${(props) => (props.selected ? 'bold' : '')};
  /* background: rgb(81, 81, 99); */
`;

export const DetailsOverView = styled.div``;
