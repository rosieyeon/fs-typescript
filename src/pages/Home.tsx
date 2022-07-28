import React from "react";
import getSummonerInfo from "api/getSummonerInfo";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/configureStore";
import { useDispatch } from "react-redux";
import { getYoutubeList } from "features/youtubeList/youtubeListSlice";

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
  getSummonerInfo("hide on bush");

  const { youtubeList, keyQuery, loading } = useAppSelector(
    (state) => state.youtubeList
  );
  console.log(youtubeList, keyQuery, loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getYoutubeList("t1"));
  }, []);

  // getYoutubeList("t1");

  // useEffect(() => {
  //   dispatch(getYoutubeList(YoutubeList("t1")))
  // }, [dispatch])

  // const test = useSelector<Record<string, string>>(
  //   (state) => state.summonerInfo
  // );
  // console.log(test);

  return <>app</>;
};

export default Home;
