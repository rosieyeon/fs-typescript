import React from "react";
// import getSummonerInfo from "api/getSummonerInfo";
import { useEffect } from "react";
import YoutubeItem from "components/Youtube/YoutubeItem";
import getYoutubeList from "api/getYoutubeList";
import { useAppDispatch, useAppSelector } from "app/store";
import { HomeLayout, HomeYoutubeItem } from "./Home.styled";
import getChannelId from "api/getChannelId";

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

const Home: React.FC = () => {
  const { youtubeList, loading, error } = useAppSelector(
    (state) => state.youtubeList
  );
  // getChannelId("T1");

  const dispatch = useAppDispatch();

  // 여기에 then으로 에러 분기 처리
  useEffect(() => {
    dispatch(getYoutubeList("t1"));
  }, [dispatch]);

  // const test = useSelector<Record<string, string>>(
  //   (state) => state.summonerInfo
  // );
  // console.log(test);

  return (
    <HomeLayout>
      {loading === "pending" ? (
        "LOADING"
      ) : error ? (
        "ERROR"
      ) : (
        <HomeYoutubeItem>
          {youtubeList.map((youtube, index) => (
            <YoutubeItem youtube={youtube} key={index} />
          ))}
        </HomeYoutubeItem>
      )}
    </HomeLayout>
  );
};

export default Home;
