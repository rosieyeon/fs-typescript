import React from "react";
import { matchParticipants } from "features/riot/matchDetailSlice";
import { RIOT_CHAMP_IMG } from "services/cdnValue";
import {
  Participant,
  ParticipantImg,
  ParticipantName,
  ParticipantsLayout,
  ParticipantTeam,
} from "./Participants.styled";
import findRedBlue from "utils/findRedBlue";

interface partiProps {
  participants: matchParticipants[];
}

const Participants = (data: partiProps) => {
  const players = data.participants;
  const redBlue = findRedBlue(players);

  return (
    <ParticipantsLayout>
      <ParticipantTeam>
        {redBlue.blue?.map((player, idx) => (
          <Participant key={idx}>
            <ParticipantImg
              src={`${RIOT_CHAMP_IMG}/${player.championName}.png`}
            />
            <ParticipantName>{player.summonerName}</ParticipantName>
          </Participant>
        ))}
      </ParticipantTeam>
      <ParticipantTeam>
        {redBlue.red?.map((player, idx) => (
          <Participant key={idx}>
            <ParticipantImg
              src={`${RIOT_CHAMP_IMG}/${player.championName}.png`}
            />
            <ParticipantName>{player.summonerName}</ParticipantName>
          </Participant>
        ))}
      </ParticipantTeam>
    </ParticipantsLayout>
  );
};
export default Participants;
