import styled from "styled-components";

export const SummonersLayout = styled.div`
  padding-bottom: 40px;
`;
export const SummonersLogo = styled.img`
  display: block;
  width: 500px;
  margin: 0 auto;
`;

export const SummonersList = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;
export const SummonersBox = styled.div<{ sec: number }>`
  ${({ theme }) => theme.defaultAnimation}
  opacity: 0;
  animation-delay: ${(props) => (props.sec + 1) * 0.2}s;
`;
export const SummonersImg = styled.img`
  width: 300px;
  height: auto;
  cursor: pointer;
`;
export const SummonersName = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding: 12px;
  text-align: center;
  cursor: pointer;
`;
