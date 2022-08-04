import { matchParticipants } from "features/riot/matchDetailSlice";

const findRedBlue = (participants: matchParticipants[]) => {
  const blue: matchParticipants[] = [];
  const red: matchParticipants[] = [];
  for (let i = 0; i < 10; i++) {
    if (i < 5) {
      blue.push(participants[i]);
    } else {
      red.push(participants[i]);
    }
  }
  return { blue: blue, red: red };
};
export default findRedBlue;
