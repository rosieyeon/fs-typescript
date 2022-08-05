import { createAsyncThunk } from "@reduxjs/toolkit";
import { matchParticipants } from "features/riot/matchDetailSlice";
import riotMatch from "services/riotMatchAPI";

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

// thunk 안에 있는 async 함수를 따로 만들고 createThunk를 slice에
// 20개 넘었을때 확인 직접 만들어서 해봐
const getMatchData = createAsyncThunk(
  "matchData/getMatchData",
  async (puuId: string, { rejectWithValue }) => {
    try {
      const matchIdsResult = await riotMatch.get(
        `/match/v5/matches/by-puuid/${puuId}/ids`,
        {
          params: {
            count: 2,
          },
        }
      );
      // console.log(matchIdsResult);

      const PromiseArrayResult = matchIdsResult.data.map(
        async (matchId: string) => {
          const participants: matchParticipants[] = [];
          //TODO 여기서 이상항 url 이용 아니며녀 throw error
          const response = await riotMatch.get(`match/v5/matches/${matchId}`);
          const res = response.data;
          console.log(res);
          res.info.participants.map((player: ParticipantsDto) => {
            participants.push({
              assists: player.assists,
              kda: player.challenges.kda.toFixed(2),
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
              totalDamageDealt: player.totalDamageDealt,
              totalDamageDealtToChampions: player.totalDamageDealtToChampions,
              totalDamageTaken: player.totalDamageTaken,
              goldEarned: player.goldEarned,
            });
          });
          return {
            gameDuration: res.info.gameDuration,
            gameEndTimestamp: res.info.gameEndTimestamp,
            participants: participants,
            teams: res.info.teams,
            // participantsId: res.metaData.participants,
          };
        }
      );
      // return matchIdsResult.data;
      //all.catch all에 await
      return Promise.all(PromiseArrayResult);
    } catch (error) {
      return rejectWithValue("error!");
    }
  }
);

export default getMatchData;
