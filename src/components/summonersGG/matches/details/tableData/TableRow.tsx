// import getPlayerTier from "api/getPlayerTier";
import { SummonerTierDto } from "api/getSummonerTier";
import { matchParticipants } from "features/matchList/matchDetailSlice";
import React, { useEffect, useState } from "react";
import riot from "services/riot";
import toCapitalize from "util/toCapitalize";
import DetailChamp from "./champ/DetailChamp";
import DetailPerks from "./perks/DetailPerks";
import {
  DetailContents,
  DetailCS,
  DetailDamage,
  DetailDamageBar,
  DetailDamageBox,
  DetailDamageFill,
  DetailDamageTxt,
  DetailKDA,
  DetailKDARatio,
  DetailName,
  DetailSummoner,
  DetailTD,
  DetailTier,
  DetailTR,
  DetailWard,
} from "./TableRow.styled";

interface rowDataProps {
  matchData: matchParticipants;
  pkill: number;
  maxDmg: number;
  maxDmgTkn: number;
  duration: number;
}

const TableRow = (data: rowDataProps) => {
  const matchData = data.matchData;
  const [tier, setTier] = useState("");
  const [spellsList, setSpellsList] = useState<number[]>([]);

  useEffect(() => {
    const spells = [];
    spells.push(matchData.spell1, matchData.spell2);
    setSpellsList(spells);

    getPlayerTier(matchData.summonerId);
  }, []);

  const getPlayerTier = async (summonerId: string) => {
    const response = await riot.get(
      `/league/v4/entries/by-summoner/${summonerId}`
    );
    response.data.map((item: SummonerTierDto) => {
      if (item.queueType === "RANKED_SOLO_5x5") {
        setTier(item.tier);
      }
    });
  };

  const getColors = (num: number) => {
    if (num < 3) {
      return "#9e9eb1";
    } else {
      if (num < 4) {
        return "#00bba3";
      } else {
        if (num < 5) {
          return "#0093ff";
        } else {
          return "#ff8200";
        }
      }
    }
  };

  return (
    <DetailTR>
      <DetailTD>
        <DetailContents>
          <DetailChamp
            name={matchData.championName}
            level={matchData.champLevel}
          />
          <DetailPerks
            spells={spellsList}
            perk1={matchData.perks1}
            perk2={matchData.perks2}
          />
          <DetailSummoner>
            <DetailName>{matchData.summonerName}</DetailName>
            <DetailTier>{toCapitalize(tier)}</DetailTier>
          </DetailSummoner>
        </DetailContents>
      </DetailTD>

      <DetailTD>
        <DetailKDA>
          {matchData.kills}/{matchData.deaths}/{matchData.assists} (
          {parseInt(String(data.pkill))}%)
        </DetailKDA>
        <DetailKDARatio ratio={getColors(Number(matchData.kda))}>
          {matchData.kda}:1
        </DetailKDARatio>
      </DetailTD>

      <DetailTD>
        <DetailDamage>
          <DetailDamageBox>
            <DetailDamageTxt>
              {matchData.totalDamageDealtToChampions}
            </DetailDamageTxt>
            <DetailDamageBar>
              <DetailDamageFill
                taken={true}
                per={
                  (matchData.totalDamageDealtToChampions / data.maxDmg) * 100
                }
              />
            </DetailDamageBar>
          </DetailDamageBox>
          <DetailDamageBox>
            <DetailDamageTxt>{matchData.totalDamageTaken}</DetailDamageTxt>
            <DetailDamageBar>
              <DetailDamageFill
                taken={false}
                per={(matchData.totalDamageTaken / data.maxDmgTkn) * 100}
              />
            </DetailDamageBar>
          </DetailDamageBox>
        </DetailDamage>
      </DetailTD>

      <DetailTD>
        <DetailWard>
          {matchData.visionWardsBoughtInGame} ({matchData.visionScore})
        </DetailWard>
        <DetailWard>
          {matchData.wardsPlaced} / {matchData.wardsKilled}
        </DetailWard>
      </DetailTD>
      <DetailTD>
        <DetailCS> {matchData.cs}</DetailCS>
        <DetailCS>{(matchData.cs / data.duration).toFixed(1)}/m</DetailCS>
      </DetailTD>
      <DetailTD></DetailTD>
    </DetailTR>
  );
};
export default TableRow;
