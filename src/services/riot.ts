import axios from "axios";

export default axios.create({
  baseURL: "https://kr.api.riotgames.com/lol/summoner/v5",
  params: {
    key: process.env.API_KEY,
  },
});
