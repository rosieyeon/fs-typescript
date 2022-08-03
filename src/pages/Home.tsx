import React from "react";
import { useEffect, useCallback, useState } from "react";

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
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const { youtubeList, loading, error } = useAppSelector(
    (state) => state.youtubeList
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // 여기에 then으로 에러 분기 처리
  console.log(query, keyword);
  console.log(youtubeList);
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

  const onClickPlay = (id: string) => {
    navigate(`https://www.youtube.com/embed/${id}`);
    console.log("??");
  };

  return (
    <HomeLayout>
      <HomeLogo src="images/logo/t1.jpeg" />
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
