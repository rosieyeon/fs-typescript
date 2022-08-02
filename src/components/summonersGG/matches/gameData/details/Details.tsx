import { matchParticipants } from "features/matchList/matchDetailSlice";
import React from "react";
import toCapitalize from "util/toCapitalize";
import {
  DetailsLane,
  DetailsLayout,
  DetailsPKill,
  DetailsStats,
} from "./Details.styled";

interface detailsProps {
  data: matchParticipants;
  pkill: number;
  duration: number;
}

const Details = (data: detailsProps) => {
  const gameData = data.data;

  return (
    <DetailsLayout>
      <DetailsPKill>P/Kill {parseInt(String(data.pkill))}%</DetailsPKill>
      <DetailsStats>
        Control Ward {gameData.visionWardsBoughtInGame}
      </DetailsStats>
      <DetailsStats>
        CS {gameData.cs} ({(gameData.cs / data.duration).toFixed(1)})
      </DetailsStats>
      <DetailsLane>{toCapitalize(gameData.lane)}</DetailsLane>
    </DetailsLayout>
  );
};
export default Details;
