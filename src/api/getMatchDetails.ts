import { createAsyncThunk } from "@reduxjs/toolkit";
import { matchParticipants } from "features/matchList/matchDetailSlice";
import riotMatch from "services/riotMatch";
import { NumericLiteral } from "typescript";

// interface MatchDetailsDto {
//   metaData: MetaDataDto;
//   info: InfoDto;
// }

// interface MetaDataDto {
//   dataVersion: number;
//   matchId: string;
//   participants: [];
// }

interface InfoDto {
  gameCreation: number;
  gameDuration: number;
  gameEndTimeStamp: number;
  gameId: number;
  gameMode: string;
  gameName: string;
  gameStartTimestamp: number;
  gameType: string;
  gameVersion: string;
  mapId: number;
  participants: ParticipantsDto[];
  platformId: string;
  queueId: number;
  teams: [];
  tournamentCode: string;
}

interface ParticipantsDto {
  assists: number;
  baronKills: number;
  basicPings: number;
  bountyLevel: number;
  challenges: ChallengesDto;
  champExperience: number;
  champLevel: number;
  championId: number;
  championName: string;
  championTransform: number;
  consumablesPurchased: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;
  deaths: number;
  detectorWardsPlaced: number;
  doubleKills: number;
  dragonKills: number;
  eligibleForProgression: boolean;
  firstBloodAssist: boolean;
  firstBloodKill: boolean;
  firstTowerAssist: boolean;
  firstTowerKill: boolean;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  goldEarned: number;
  goldSpent: number;
  individualPosition: string;
  inhibitorKills: number;
  inhibitorTakedowns: number;
  inhibitorsLost: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  itemsPurchased: number;
  killingSprees: number;
  kills: number;
  lane: string;
  largestCriticalStrike: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  longestTimeSpentLiving: number;
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;
  neutralMinionsKilled: number;
  nexusKills: number;
  nexusLost: number;
  nexusTakedowns: number;
  objectivesStolen: number;
  objectivesStolenAssists: number;
  participantId: number;
  pentaKills: number;
  perks: PerksDto;
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  profileIcon: number;
  puuid: string;
  quadraKills: number;
  riotIdName: "";
  riotIdTagline: "";
  role: string;
  sightWardsBoughtInGame: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerId: string;
  summonerLevel: number;
  summonerName: string;
  teamEarlySurrendered: boolean;
  teamId: number;
  teamPosition: string;
  timeCCingOthers: number;
  timePlayed: number;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;
  totalHeal: number;
  totalHealsOnTeammates: number;
  totalMinionsKilled: number;
  totalTimeCCDealt: number;
  totalTimeSpentDead: number;
  totalUnitsHealed: number;
  tripleKills: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;
  turretKills: number;
  turretTakedowns: number;
  turretsLost: number;
  unrealKills: number;
  visionScore: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
}

interface ChallengesDto {
  kda: number;
}

interface PerksDto {
  styles: PerksStylesDto[];
}

interface PerksStylesDto {
  description: string;
  selections: PerksSelectionsDto[];
  style: number;
}

interface PerksSelectionsDto {
  perk: number;
}

// const getMatchDetails = createAsyncThunk(
//   "matchDetail/getMatchDetails",
//   async () => {
//     try {
//       const response = await riotMatch.get(`match/v5/matches/KR_6050345030`);
//       console.log(response);
//       const res = response.data;
//       return {
//         gameDuration: res.info.gameDuration,
//         gameEndTimeStamp: res.info.gameEndTimeStamp,
//         participants: res.info.participants,
//         teams: res.info.teams,
//         participantsId: res.metaData.participants,
//       };
//     } catch (error) {
//       error;
//     }
//   }
// );

const getMatchDetails = async () => {
  const participants: matchParticipants[] = [];
  try {
    const response = await riotMatch.get(`match/v5/matches/KR_6050345030`);
    // console.log(response);
    const res = response.data;
    res.info.participants.map((player: ParticipantsDto) => {
      participants.push({
        assists: player.assists,
        kda: player.challenges.kda.toFixed(1),
        champLevel: player.champLevel,
        championId: player.championId,
        championName: player.championName,
        kills: player.kills,
        deaths: player.deaths,
        visionWardsBoughtInGame: player.visionWardsBoughtInGame,
        wardsKilled: player.wardsKilled,
        wardsPlaced: player.wardsPlaced,
        visionScore: player.visionScore,
        doubleKills: player.doubleKills,
        item0: player.item0,
        item1: player.item1,
        item2: player.item2,
        item3: player.item3,
        item4: player.item4,
        item5: player.item5,
        item6: player.item6,
        lane: player.lane,
        participantId: player.participantId,
        pentaKills: player.pentaKills,
        perks1: player.perks.styles[0].selections[0].perk, // perks.styles[0].selections[0].perk
        perks2: player.perks.styles[1].style, // perks.styles[1].style
        win: player.win,
        puuid: player.puuid,
        summonerId: player.summonerId,
        summonerName: player.summonerName,
        teamId: player.teamId,
        tripleKills: player.tripleKills,
        cs: player.totalMinionsKilled + player.neutralMinionsKilled, // totalMiniosKilled +neutralMiniosKilled
        spell1: player.summoner1Id, // summoner1Id
        spell2: player.summoner2Id, // summoner2Id
      });
    });
    return {
      gameDuration: res.info.gameDuration,
      gameEndTimeStamp: res.info.gameEndTimeStamp,
      participants: participants,
      teams: res.info.teams,
      participantsId: res.metaData.participants,
    };
  } catch (error) {
    error;
  }
};

export default getMatchDetails;
