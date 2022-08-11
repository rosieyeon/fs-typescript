import React, { useEffect, useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'app/store';
import YoutubeItem from 'components/youtube/YoutubeItem';
import { getYoutubeList } from 'features/youtube/youtubeListSlice';
import {
  YoutubeCategoryBox,
  YoutubeCategoryButton,
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
import { YoutubeQuery } from 'api/youtubeAPI';

const t1tubeGroups = [
  {
    name: 'ALL',
    keyword: '',
    channelID: 'UCJprx3bX49vNl6Bcw01Cwfg',
    order: 'date',
  },
  {
    name: 'Locker Room',
    keyword: 'Locker Room',
    channelID: 'UCJprx3bX49vNl6Bcw01Cwfg',
    order: 'relevance',
  },
  {
    name: 'Hidden Track',
    keyword: 'Hidden Track',
    channelID: 'UCJprx3bX49vNl6Bcw01Cwfg',
    order: 'date',
  },
  {
    name: 'Stream Highlight',
    keyword: 'Stream Highlight',
    channelID: 'UCJprx3bX49vNl6Bcw01Cwfg',
    order: 'date',
  },
  {
    name: 'LCK Highlight',
    keyword: 'LCK T1',
    channelID: 'UCx2hbU7rRax_MjiFaseI4TQ',
    order: 'date',
  },
];
const Youtube: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [query, setQuery] = useState('');
  const { youtubeList, loading, error } = useAppSelector(
    (state) => state.youtubeList
  );

  const dispatch = useAppDispatch();

  // 여기에 then으로 에러 분기 처리
  useEffect(() => {
    dispatch(
      getYoutubeList({
        keyword: query,
        channelID: 'UCJprx3bX49vNl6Bcw01Cwfg',
        name: '',
        order: 'date',
      })
    );
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

  const onClickShow = useCallback(
    (t1tube: YoutubeQuery) => {
      dispatch(getYoutubeList(t1tube));
    },
    [dispatch]
  );

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
      <YoutubeCategoryBox>
        {t1tubeGroups.map((t1tube, idx) => (
          <YoutubeCategoryButton
            key={idx}
            onClick={() =>
              onClickShow({
                keyword: t1tube.keyword,
                channelID: t1tube.channelID,
                name: t1tube.name,
                order: t1tube.order,
              })
            }
          >
            {t1tube.name}
          </YoutubeCategoryButton>
        ))}
      </YoutubeCategoryBox>
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
