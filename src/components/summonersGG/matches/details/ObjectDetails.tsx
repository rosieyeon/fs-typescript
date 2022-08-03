import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { teamProps } from "../MatchItem";
import ObjectData from "./objectData/ObjectData";
import {
  ObjectDetailsGraph,
  ObjectDetailsLayout,
  ObjectDetailsLeft,
} from "./ObjectDetails.styled";

interface objProps {
  data: teamProps[];
  win: boolean;
}

interface graphProps {
  kills: number;
  gold: number;
}

export interface sortObjProps {
  name: string;
  kills: number;
}
const ObjectDetails = (data: objProps) => {
  console.log(data);
  const teams = data.data;
  const [myObj, setMyObj] = useState<sortObjProps[]>();
  const [notMyObj, setNotMyObj] = useState<sortObjProps[]>();

  const [myTeamStats, setMyTeamStats] = useState<graphProps>();
  // const [yourTeamStats, setYouTeamStats] = useS

  useEffect(() => {
    const mine = [];
    const notMine = [];
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
      }
    }
  }, []);

  return (
    <ObjectDetailsLayout>
      {myObj && <ObjectData data={myObj} win={data.win} />}
      <ObjectDetailsGraph>
        <ObjectDetailsLeft />
      </ObjectDetailsGraph>
      {notMyObj && <ObjectData data={notMyObj} win={!data.win} />}
    </ObjectDetailsLayout>
  );
};

export default ObjectDetails;
