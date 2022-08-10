import React, { useEffect, useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'app/store';
import YoutubeItem from 'components/youtube/YoutubeItem';
import { getYoutubeList } from 'features/youtube/youtubeListSlice';
import {
  YoutubeError,
  YoutubeLayout,
  YoutubeLoading,
  YoutubeLoadingImg,
  YoutubeLoadingSkeleton,
  YoutubeLoadingTxt,
  YoutubeLogo,
  YoutubeSearch,
  YoutubeSearchBar,
  YoutubeSearchButton,
  YoutubeYoutubeItem,
} from './Youtube.styled';

const Youtube: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [query, setQuery] = useState('');
  const { youtubeList, loading, error } = useAppSelector(
    (state) => state.youtubeList
  );

  const dispatch = useAppDispatch();

  // 여기에 then으로 에러 분기 처리
  useEffect(() => {
    dispatch(getYoutubeList(query));
  }, [dispatch, query]);

  //TODO useCallback 이용이유 확실하게 써야하는 이유, 쓸 때에는 dependency 걸어야하는지 기준점
  const onChangeSearch = useCallback(
    (event: { target: { value: React.SetStateAction<string> } }) => {
      setKeyword(event.target.value);
    },
    []
  );

  const onClickApply = useCallback(() => {
    setQuery(keyword);
  }, [keyword]);

  const onKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      onClickApply();
    }
  };

  return (
    <YoutubeLayout>
      <YoutubeLogo src="images/logo/t1.jpeg" />
      <YoutubeSearch>
        <YoutubeSearchBar
          placeholder="검색"
          onChange={onChangeSearch}
          onKeyPress={onKeyPress}
        />
        <YoutubeSearchButton onClick={onClickApply}>SEARCH</YoutubeSearchButton>
      </YoutubeSearch>
      {loading === 'pending' ? (
        <YoutubeLoading>
          {youtubeList.map((youtube, index) => (
            <YoutubeLoadingSkeleton key={index}>
              <YoutubeLoadingImg />
              <YoutubeLoadingTxt />
            </YoutubeLoadingSkeleton>
          ))}
        </YoutubeLoading>
      ) : error ? (
        <YoutubeError>데이터를 불러올 수 없습니다</YoutubeError>
      ) : (
        <YoutubeYoutubeItem>
          {youtubeList.map((youtube, index) => (
            <YoutubeItem youtube={youtube} key={index} />
          ))}
        </YoutubeYoutubeItem>
      )}
    </YoutubeLayout>
  );
};

export default Youtube;
