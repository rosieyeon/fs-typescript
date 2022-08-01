import { createAsyncThunk } from "@reduxjs/toolkit";
import riotMatch from "services/riotMatch";

const getMatchIds = createAsyncThunk(
  "matchId/getMatchId",
  async (puuId: string, { rejectWithValue }) => {
    try {
      const matchIdsResult = await riotMatch.get(
        `/match/v5/matches/by-puuid/${puuId}/ids`,
        {
          params: {
            count: 9,
          },
        }
      );
      // console.log(typeof matchIdsResult.data);
      return matchIdsResult.data;
    } catch (error) {
      return rejectWithValue("error!");
    }
  }
);

// const getMatchIds = async (puuId: string) => {
//   try {
//     const matchIdsResult = await riotMatch.get(
//       `/match/v5/matches/by-puuid/${puuId}/ids`,
//       {
//         params: {
//           count: 10,
//         },
//       }
//     );
//     console.log(typeof matchIdsResult.data);
//     console.log(matchIdsResult);
//     return matchIdsResult.data;
//   } catch (error) {
//     error;
//   }
// };

export default getMatchIds;
