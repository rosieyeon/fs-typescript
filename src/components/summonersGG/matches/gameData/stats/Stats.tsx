import React from "react";
import { matchParticipants } from "features/riot/matchDetailSlice";
import toCapitalize from "utils/toCapitalize";
import { StatsLane, StatsLayout, StatsPKill, StatsStats } from "./Stats.styled";

interface statsProps {
  data: matchParticipants;
  pkill: number;
  duration: number;
}

const Stats = (data: statsProps) => {
  const gameData = data.data;

  return (
    <StatsLayout>
      <StatsPKill>P/Kill {parseInt(String(data.pkill))}%</StatsPKill>
      <StatsStats>Control Ward {gameData.visionWardsBoughtInGame}</StatsStats>
      <StatsStats>
        CS {gameData.cs} ({(gameData.cs / data.duration).toFixed(1)})
      </StatsStats>
      <StatsLane>{toCapitalize(gameData.lane)}</StatsLane>
    </StatsLayout>
  );
};
export default Stats;
