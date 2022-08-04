import { matchParticipants } from "features/riot/matchDetailSlice";

const findRedBlue = (participants: matchParticipants[]) => {
  return { blue: participants.slice(0, 5), red: participants.slice(5, 10) };
};
export default findRedBlue;
