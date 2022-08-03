import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { teamProps } from "../MatchItem";
import ObjBar from "./objectData/ObjBar";
import ObjectData from "./objectData/ObjectData";
import { ObjectDetailsLayout } from "./ObjectDetails.styled";

interface objProps {
  data: teamProps[];
  win: boolean;
}

// interface graphProps {
//   kills: number;
//   gold: number;
// }

export interface sortObjProps {
  name: string;
  kills: number;
}

export interface barGraphProps {
  name: string;
  mine: number;
  yours: number;
}

const ObjectDetails = (data: objProps) => {
  console.log(data);
  const teams = data.data;
  const [graphData, setGraphData] = useState<barGraphProps[]>();
  const [myObj, setMyObj] = useState<sortObjProps[]>();
  const [notMyObj, setNotMyObj] = useState<sortObjProps[]>();

  // const [myTeamStats, setMyTeamStats] = useState<graphProps>();
  // const [yourTeamStats, setYouTeamStats] = useS

  useEffect(() => {
    const mine = [];
    const notMine = [];
    let myTotalKills = 0;
    let myTotalGold = 0;
    let yourTotalKills = 0;
    let yourTotalGold = 0;

    for (let i = 0; i < 2; i++) {
      if (teams[i].win === data.win) {
        const baron = { name: "baron", kills: teams[i].objectives.baron.kills };
        const dragon = {
          name: "dragon",
          kills: teams[i].objectives.dragon.kills,
        };
        const tower = {
          name: "tower",
          kills: teams[i].objectives.tower.kills,
        };
        mine.push(baron, dragon, tower);
        setMyObj(mine);

        myTotalKills = teams[i].objectives.champion.kills;
        myTotalGold = teams[i].goldEarned;
      } else {
        const baron = {
          name: "baron",
          kills: teams[i].objectives.baron.kills,
        };
        const dragon = {
          name: "dragon",
          kills: teams[i].objectives.dragon.kills,
        };
        const tower = {
          name: "tower",
          kills: teams[i].objectives.tower.kills,
        };
        notMine.push(baron, dragon, tower);
        setNotMyObj(notMine);

        yourTotalKills = teams[i].objectives.champion.kills;
        yourTotalGold = teams[i].goldEarned;
      }
    }
    setGraphData([
      { name: "Total Kill", mine: myTotalKills, yours: yourTotalKills },
      { name: "Total Gold", mine: myTotalGold, yours: yourTotalGold },
    ]);
  }, []);
  console.log(graphData);
  return (
    <ObjectDetailsLayout>
      {myObj && <ObjectData data={myObj} win={data.win} />}
      {graphData && <ObjBar graphData={graphData} win={data.win} />}
      {notMyObj && <ObjectData data={notMyObj} win={!data.win} />}
    </ObjectDetailsLayout>
  );
};

export default ObjectDetails;
