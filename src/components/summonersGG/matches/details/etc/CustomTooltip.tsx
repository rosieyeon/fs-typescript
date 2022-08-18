import { useAppSelector } from 'app/store';
import React from 'react';
import { TooltipProps } from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { RIOT_CHAMP_IMG } from 'services/riot/cdnValue';
import {
  CustomTooltipData,
  CustomTooltipDataBox,
  CustomTooltipImg,
  CustomTooltipImgBox,
  CustomTooltipLayout,
  CustomTooltipXAxis,
  CustomTooltipYAxis,
} from './CustomTooltip.styled';
import { lineColors } from './Etc';

const CustomTooltip = ({
  payload,
  label,
  active,
}: TooltipProps<ValueType, NameType>) => {
  const { match } = useAppSelector((state) => state.selectedMatch);
  if (active && payload && payload[0].color) {
    return (
      <CustomTooltipLayout color={payload[0].color}>
        <CustomTooltipXAxis>{label} min</CustomTooltipXAxis>
        <CustomTooltipDataBox>
          {payload?.map(
            (player, idx) =>
              player.dataKey && (
                <CustomTooltipData key={idx}>
                  <CustomTooltipImgBox
                    color={lineColors[Number(player.dataKey) - 1]}
                  ></CustomTooltipImgBox>
                  {player.dataKey && (
                    <CustomTooltipImg
                      src={`${RIOT_CHAMP_IMG}/${
                        match[Number(player.dataKey) - 1].championName
                      }.png`}
                    />
                  )}
                  {player.payload.type !== 'cs' ? (
                    <CustomTooltipYAxis>
                      {' '}
                      :{' '}
                      {Math.ceil(
                        player.payload[player.dataKey] * 1000
                      ).toLocaleString('ko-KR')}
                    </CustomTooltipYAxis>
                  ) : (
                    <CustomTooltipYAxis>
                      {' '}
                      :{' '}
                      {Math.ceil(player.payload[player.dataKey]).toLocaleString(
                        'ko-KR'
                      )}
                    </CustomTooltipYAxis>
                  )}
                </CustomTooltipData>
              )
          )}
        </CustomTooltipDataBox>
      </CustomTooltipLayout>
    );
  }
  return null;
};

export default CustomTooltip;
