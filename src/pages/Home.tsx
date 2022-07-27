import { YoutubeList } from "features/youtubeList/youtubeListSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // getSummonerInfo,
  summoner,
  // summoner,
} from "../features/summonersList/summonerInfoSlice";
import { useAppDispatch } from "../store/configureStore";
import riot from "../services/riot";
import { useState } from "react";
import { Summoner } from "store/store.types";
// import { Summoner } from "../store/store.types";

// const headers = {
//   "X-Riot-Token": `${process.env.REACT_APP_RIOT_API_KEY}`,
//   "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
//   "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
// };

// interface SummonerState {
//   SummonerInfo: Summoner[];
// }

// export const getSummonerInfo = async (summonerName: string) => {
//   try {
//     const response = await axios.get(
//       `${process.env.REACT_APP_RIOT_API_URL}/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
//     );
//     console.log(response.data);
//     return response.data.items.map((item: Summoner) => {
//       console.log(item.id);
//       // id: item.id,
//     });
//   } catch (e: unknown) {
//     return "error";
//   }
// };

// const [id, setId] = useState("");
// const [name, setName] = useState("");
// const [profileIconId, setProfileIconId] = useState(0);
// const [puuid, setPuuid] = useState("");
// const [level, setLevel] = useState(0);

// const getSummonerProfileInfo = async (summonerName: string) => {
//   try {
//     const response = await axios.get(
//       `${process.env.REACT_APP_RIOT_API_URL}/summoner/v4/summoners/by-name/${summonerName}`,
//       { headers }
//     );
//     console.log(response.data);
//     return response.data;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (e: any) {
//     return e.response.data;
//   }
// };

const Home = () => {
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

  getSummonerInfo("hide on bush");

  // const test = useSelector<Record<string, string>>(
  //   (state) => state.summonerInfo
  // );
  // console.log(test);

  return <>app</>;
};

export default Home;
