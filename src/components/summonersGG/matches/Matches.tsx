import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import MatchItem from './MatchItem';
// import getMatchData from 'api/getMatchData';
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

  // const data = getBuildDetail('KR_6078019103');
  const data = [
    {
      1: 500,
      2: 500,
      3: 500,
      4: 500,
      5: 500,
      6: 500,
      7: 500,
      8: 500,
      9: 500,
      10: 500,
      time: 0,
    },
    {
      1: 500,
      2: 500,
      3: 500,
      4: 500,
      5: 500,
      6: 500,
      7: 500,
      8: 500,
      9: 500,
      10: 500,
      time: 1,
    },
    {
      1: 521,
      2: 621,
      3: 598,
      4: 584,
      5: 623,
      6: 563,
      7: 629,
      8: 577,
      9: 584,
      10: 544,
      time: 2,
    },
    {
      1: 867,
      2: 1013,
      3: 881,
      4: 1004,
      5: 857,
      6: 846,
      7: 1018,
      8: 923,
      9: 818,
      10: 720,
      time: 3,
    },
    {
      1: 1176,
      2: 1311,
      3: 1748,
      4: 2762,
      5: 1167,
      6: 1218,
      7: 1461,
      8: 1637,
      9: 1092,
      10: 990,
      time: 4,
    },
    {
      1: 1622,
      2: 1844,
      3: 2171,
      4: 2968,
      5: 1301,
      6: 1480,
      7: 1763,
      8: 1962,
      9: 1424,
      10: 1243,
      time: 5,
    },
    {
      1: 2052,
      2: 2509,
      3: 2636,
      4: 3884,
      5: 1696,
      6: 1785,
      7: 2445,
      8: 2258,
      9: 1623,
      10: 1559,
      time: 6,
    },
    {
      1: 2763,
      2: 2782,
      3: 3051,
      4: 4776,
      5: 2712,
      6: 1907,
      7: 2658,
      8: 2380,
      9: 1787,
      10: 1693,
      time: 7,
    },
    {
      1: 3129,
      2: 3209,
      3: 3243,
      4: 5705,
      5: 3494,
      6: 2259,
      7: 3150,
      8: 2990,
      9: 1965,
      10: 1918,
      time: 8,
    },
    {
      1: 4021,
      2: 4027,
      3: 3550,
      4: 6364,
      5: 3975,
      6: 2445,
      7: 3373,
      8: 3253,
      9: 2258,
      10: 2102,
      time: 9,
    },
    {
      1: 4298,
      2: 4225,
      3: 3990,
      4: 6950,
      5: 4515,
      6: 2763,
      7: 3626,
      8: 3657,
      9: 2429,
      10: 2236,
      time: 10,
    },
    {
      1: 4816,
      2: 4517,
      3: 4488,
      4: 8172,
      5: 5333,
      6: 3366,
      7: 4785,
      8: 4530,
      9: 2755,
      10: 2445,
      time: 11,
    },
    {
      1: 5295,
      2: 5235,
      3: 4919,
      4: 9739,
      5: 5623,
      6: 3509,
      7: 5201,
      8: 4708,
      9: 2877,
      10: 2680,
      time: 12,
    },
    {
      1: 6127,
      2: 6204,
      3: 6150,
      4: 11044,
      5: 6653,
      6: 3737,
      7: 5351,
      8: 5027,
      9: 3020,
      10: 2821,
      time: 13,
    },
    {
      1: 6696,
      2: 6797,
      3: 6769,
      4: 12426,
      5: 6931,
      6: 3955,
      7: 5995,
      8: 5228,
      9: 3841,
      10: 3125,
      time: 14,
    },
    {
      1: 7338,
      2: 6919,
      3: 6892,
      4: 13173,
      5: 7146,
      6: 4196,
      7: 7641,
      8: 5604,
      9: 5477,
      10: 3538,
      time: 15,
    },
    {
      1: 7686,
      2: 7292,
      3: 7914,
      4: 13381,
      5: 7512,
      6: 4561,
      7: 8273,
      8: 6333,
      9: 5880,
      10: 3720,
      time: 16,
    },
    {
      1: 8072,
      2: 7658,
      3: 8211,
      4: 14404,
      5: 8245,
      6: 4980,
      7: 8526,
      8: 6545,
      9: 6260,
      10: 3968,
      time: 17,
    },
    {
      1: 8390,
      2: 7747,
      3: 8281,
      4: 14477,
      5: 8318,
      6: 5003,
      7: 8549,
      8: 6568,
      9: 6283,
      10: 3995,
      time: 18,
    },
  ];

  return (
    <MatchesLayout>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="1"
            // strokeOpacity={opacity.pv}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="2"
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
