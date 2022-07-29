import React from "react";
// import getSummonerInfo from "api/getSummonerInfo";
import { useEffect } from "react";
import YoutubeItem from "components/Youtube/YoutubeItem";
import getYoutubeList from "api/getYoutubeList";
import { useAppDispatch, useAppSelector } from "app/store";
import {
  HomeLayout,
  HomeLogo,
  HomeSearch,
  HomeSearchBar,
  HomeSearchButton,
  HomeYoutubeItem,
} from "./Home.styled";
import { useCallback } from "react";
import { useState } from "react";

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
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const { youtubeList, loading, error } = useAppSelector(
    (state) => state.youtubeList
  );

  const dispatch = useAppDispatch();

  // 여기에 then으로 에러 분기 처리
  console.log(query, keyword);
  useEffect(() => {
    dispatch(getYoutubeList(keyword));
  }, [query]);

  const onChangeSearch = useCallback(
    (event: { target: { value: React.SetStateAction<string> } }) => {
      setKeyword(event.target.value);
    },
    []
  );

  const onClickApply = () => {
    setQuery(keyword);
  };

  return (
    <HomeLayout>
      <HomeLogo src="images/t1.jpeg" />
      <HomeSearch>
        <HomeSearchBar placeholder="검색" onChange={onChangeSearch} />
        <HomeSearchButton onClick={onClickApply}>SEARCH</HomeSearchButton>
      </HomeSearch>
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
