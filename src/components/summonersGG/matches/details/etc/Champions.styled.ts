import styled from 'styled-components';

export const ChampionsLayout = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;

export const ChampionsBox = styled.div`
  display: flex;
  gap: 12px;
`;
export const ChampionsImgBox = styled.div<{ color: string }>`
  width: 48px;
  height: 48px;
  padding: 8px;
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
export const ChampionsImg = styled.img<{ selected: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  opacity: ${(props) => (props.selected ? 0.5 : 1)};

  border: 0px;
  vertical-align: middle;
  max-width: 100%;
`;
export const ChampionsSelected = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  top: 8px;
  left: 8px;
`;
