import { summoner } from "features/summonersList/summonerInfoSlice";
import { useDispatch } from "react-redux";
import riot from "services/riot";

const dispatch = useDispatch();
const getSummonerInfo = async (summonerName: string) => {
  try {
    const response = await riot.get(
      `/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
    );
    console.log(response);
    dispatch(
      summoner({
        accountId: response.data.accountId,
        id: response.data.id,
        name: response.data.name,
        profileIconId: response.data.profileIconId,
        puuid: response.data.puuid,
        revisionDate: response.data.revisionData,
        summonerLevel: response.data.summonerLevel,
      })
    );
  } catch (error) {
    return;
  }
};

export default getSummonerInfo;
