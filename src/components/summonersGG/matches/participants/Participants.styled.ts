import styled from 'styled-components';

export const ParticipantsLayout = styled.div`
  display: flex;
  margin-left: 12px;
`;
export const ParticipantTeam = styled.div`
  margin-right: 8px;
`;
export const Participant = styled.div`
  display: flex;
  align-items: center;
  width: 88px;
  height: 18px;
  text-align: left;
  white-space: nowrap;
`;
export const ParticipantImg = styled.img`
  margin-right: 4px;
  width: 16px;
  height: 16px;
  border-radius: 4px;
`;
export const ParticipantName = styled.span`
  width: 64px;
  color: #9e9eb1;
  font-size: 12px;
  vertical-align: middle;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
