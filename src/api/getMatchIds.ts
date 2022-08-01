import riotMatch from "services/riotMatch";

const getMatchIds = async (puuId: string) => {
  try {
    const matchIdsResult = await riotMatch.get(
      `/match/v5/matches/by-puuid/${puuId}/ids`,
      {
        params: {
          count: 10,
        },
      }
    );
    console.log(matchIdsResult);

    // const matchDetailsResult = matchIdsResult.data.map(async (item: string) => {
    //   const response = await riotMatch.get(`match/v5/matches/${item}`);
    //   console.log(response, item);
    // });
    return matchIdsResult.data;
  } catch (error) {
    error;
  }
};

export default getMatchIds;
