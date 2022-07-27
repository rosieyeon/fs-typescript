import axios from "axios";

export default axios.create({
  baseURL: "https://kr.api.riotgames.com/lol",
  params: {
    api_key: process.env.REACT_APP_RIOT_API_KEY,
  },
});
