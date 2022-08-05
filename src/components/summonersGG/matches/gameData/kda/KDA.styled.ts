import styled from 'styled-components';

export const KDALayout = styled.div<{ winlose: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 120px;
  padding-right: 12px;
  margin-right: 8px;
  margin-left: 12px;

  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${(props) => (props.winlose ? '#2f436e' : '#703C47')};
`;
export const KDACount = styled.div`
  color: #7b7a8e;
`;
export const KDAKillAssist = styled.span`
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: white;
`;
export const KDADeaths = styled.span`
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #e84057;
`;
export const KDARatio = styled.div`
  line-height: 16px;
  color: #9e9eb1;
  font-size: 12px;
`;
