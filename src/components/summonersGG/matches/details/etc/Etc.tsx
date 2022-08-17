import { getBuildDetail } from 'api/riotAPI';
import { MatchData } from 'features/riot/matchDetailSlice';
import React, { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Champions from './Champions';
import { EtcLayout } from './Etc.styled';

interface EtcProps {
  data: MatchData;
}

const Etc = (etcData: EtcProps) => {
  const matchId = etcData.data.matchId;
  const data = getBuildDetail(matchId);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [goldData, setGoldData] = useState<any[]>();
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log(selected);
  useEffect(() => {
    data.then((item) => {
      setGoldData(item);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EtcLayout>
      <Champions
        data={etcData.data}
        setSelected={setSelected}
        selected={selected}
      />
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
          {goldData?.map((data, idx) => (
            <Line
              key={idx}
              type="monotone"
              dataKey={idx + 1}
              dot={false}
              stroke={lineColors[idx]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </EtcLayout>
  );
};

export const lineColors = [
  '#00ae0a',
  '#00bba3',
  '#52d5f3',
  '#0093ff',
  '#7d59ea',
  '#ffbac3',
  '#e84057',
  '#ff8200',
  '#ffd424',
  '#76480f',
];
export default Etc;
