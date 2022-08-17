import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from 'recharts';

import MatchItem from './MatchItem';
import {
  LoadingSkeleton,
  MatchesContent,
  MatchesLayout,
} from './Matches.styled';
import { getMatchData } from 'features/riot/matchDetailSlice';
import { getBuildDetail } from 'api/riotAPI';

const Matches = () => {
  const { summonerData } = useAppSelector((state) => state.summonerInfo);
  const { matchDetail, loading, error } = useAppSelector(
    (state) => state.matchDetails
  );
  //TODO dispatch .catch로 핸드링
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (summonerData.puuid) {
      dispatch(getMatchData(summonerData.puuid));
    }
  }, [dispatch, summonerData.puuid]);

  const data = getBuildDetail('KR_6078019103');
  console.log(data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [goldData, setGoldData] = useState<any[]>();

  useEffect(() => {
    data.then((item) => {
      console.log(item);
      setGoldData(item);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MatchesLayout>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={goldData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis dataKey="time" unit="min" />
          <YAxis unit="k" axisLine={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="1"
            dot={false}
            // strokeOpacity={opacity.pv}
            stroke="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="2"
            dot={false}
            // strokeOpacity={opacity.uv}
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
      {loading === 'pending' ? (
        <LoadingSkeleton>LOADING</LoadingSkeleton>
      ) : error ? (
        <LoadingSkeleton>{error}</LoadingSkeleton>
      ) : (
        <>
          {matchDetail.map((match, index) => (
            <MatchesContent key={index}>
              <MatchItem match={match} />
            </MatchesContent>
          ))}
        </>
      )}
    </MatchesLayout>
  );
};

export default Matches;
