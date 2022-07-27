import { YoutubeList } from "features/youtubeList/youtubeListSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSummonerInfo,
  // summoner,
} from "../features/summonersList/summonerInfoSlice";
import { useAppDispatch } from "../store/configureStore";
// import riot from "../services/riot";
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

// export const getSummonerInfo = async (summonerName: string) => {
//   try {
//     const response = await riot.get(
//       `/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
//     );
//     console.log(response);
//   } catch (error: any) {
//     return;
//   }
// };

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
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getSummonerInfo("hide on bush"));
  // },[dispatch])
  // getSummonerInfo("hide on bush");
  dispatch(getSummonerInfo("hide on bush"));
  console.log(getSummonerInfo("hide on bush"));
  // const dispatch = useDispatch();
  // dispatch(summoner({getSummonerInfo("hide on bush")}))
  const summonerInfo = useSelector((state) => console.log(state));
  console.log(summonerInfo);

  YoutubeList("t1");
  // useEffect(() => {

  // })
  return (
    <>
      app
      {/* {getSummonerInfo("hide on bush")} */}
    </>
  );
};

export default Home;
