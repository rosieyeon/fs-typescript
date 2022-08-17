import styled from 'styled-components';

export const CustomTooltipLayout = styled.div<{ color: string }>`
  font-family: 'Roboto', sans-serif;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.color};
`;

export const CustomTooltipXAxis = styled.div`
  font-size: 11px;
`;

export const CustomTooltipDataBox = styled.div`
  padding: 3px 0;
`;

export const CustomTooltipData = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 3px 0;
`;

export const CustomTooltipImgBox = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const CustomTooltipImg = styled.img`
  width: 17px;
  height: 17px;
  border-radius: 4px;
`;

export const CustomTooltipYAxis = styled.strong`
  font-weight: bold;
`;
