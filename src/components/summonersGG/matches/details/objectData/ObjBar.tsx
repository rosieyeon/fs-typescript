import React from "react";
import { barGraphProps } from "../ObjectDetails";
import {
  ObjBarBackground,
  ObjBarLayout,
  ObjBarProgress,
  ObjBarText,
  ObjBarTextBox,
} from "./ObjBar.styled";

interface graphProps {
  graphData: barGraphProps[];
  win: boolean;
}

const ObjBar = (dataProps: graphProps) => {
  const graphData = dataProps.graphData;

  return (
    <ObjBarLayout>
      {graphData.map((data, idx) => (
        <ObjBarBackground key={idx} win={dataProps.win}>
          <ObjBarProgress
            per={data.mine / (data.mine + data.yours)}
            win={dataProps.win}
          >
            <ObjBarTextBox>
              <ObjBarText>{data.mine.toLocaleString("ko-KR")}</ObjBarText>
              <ObjBarText>{data.name}</ObjBarText>
              <ObjBarText>{data.yours.toLocaleString("ko-KR")}</ObjBarText>
            </ObjBarTextBox>
          </ObjBarProgress>
        </ObjBarBackground>
      ))}
    </ObjBarLayout>
  );
};

export default ObjBar;
