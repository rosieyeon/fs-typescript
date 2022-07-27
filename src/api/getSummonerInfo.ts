import axios from "axios";
import { Summoner } from "../store/store.types";

const getSommonerInfo = async (summonerName: string) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_RIOT_API_URL}/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
    );
    console.log(response.data);
    return response.data.items.map((item: Summoner) => {
      console.log(item.id);
      // id: item.id,
    });
  } catch (e: unknown) {
    return "error";
  }
};

export default getSommonerInfo;
