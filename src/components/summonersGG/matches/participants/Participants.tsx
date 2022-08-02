import { matchParticipants } from "features/matchList/matchDetailSlice";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { RIOT_CHAMP_IMG } from "services/cdnValue";
import {
  Participant,
  ParticipantImg,
  ParticipantName,
  ParticipantsLayout,
  ParticipantTeam,
} from "./Participants.styled";

interface partiProps {
  participants: matchParticipants[];
}

// interface teamProps {
//   blue: matchParticipants[];
//   red: matchParticipants[];
// }
const Participants = (data: partiProps) => {
  const players = data.participants;
  const [blueSide, setBlueSide] = useState<matchParticipants[]>();
  const [redSide, setRedSide] = useState<matchParticipants[]>();

  useEffect(() => {
    const blue: matchParticipants[] = [];
    const red: matchParticipants[] = [];
    for (let i = 0; i < 10; i++) {
      if (i < 5) {
        blue.push(players[i]);
      } else {
        red.push(players[i]);
      }
    }
    setBlueSide(blue);
    setRedSide(red);
  }, []);

  console.log(redSide, blueSide);
  return (
    <ParticipantsLayout>
      <ParticipantTeam>
        {blueSide?.map((player, idx) => (
          <Participant key={idx}>
            <ParticipantImg
              src={`${RIOT_CHAMP_IMG}/${player.championName}.png`}
            />
            <ParticipantName>{player.summonerName}</ParticipantName>
          </Participant>
        ))}
      </ParticipantTeam>
      <ParticipantTeam>
        {redSide?.map((player, idx) => (
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
