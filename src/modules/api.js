import { handleActions, createAction } from 'redux-actions';
import { pender, applyPenders } from 'redux-pender';
import ApiDefault from 'lib/ApiDefault';


// const summoner = ApiDefault.instance.get(`/summoner/v4/summoners/by-name/${Summoner}?api_key=${ApiDefault.key}`);
// const league   = ApiDefault.instance.get(`/league/v4/positions/by-summoner/${summoner.data.id}?api_key=${ApiDefault.key}`); 
// const match    = ApiDefault.instance.get(`/match/v4/matchlists/by-account/${summoner.data.accountId}?api_key=${ApiDefault.key}`);
// return  Object.assign({}, {
//     summoner : summoner,
//     league : league,
//     match : match
// });
function getSummonerData (Summoner) {
  return ApiDefault.instance.get(`/summoner/v4/summoners/by-name/${Summoner}?api_key=${ApiDefault.key}`);
}
function getLeagueData (id) {
  return ApiDefault.instance.get(`/league/v4/positions/by-summoner/${id}?api_key=${ApiDefault.key}`); 
}
function getMatchData (accountId) {
  return ApiDefault.instance.get(`/match/v4/matchlists/by-account/${accountId}?api_key=${ApiDefault.key}`);
}

const GET_SUMMONER = 'GET_SUMMONER';
const GET_LEAGUE = 'GET_LEAGUE';
const GET_MATCH = 'GET_MATCH';

export const getSummoner = createAction(GET_SUMMONER, getSummonerData);
export const getLeague = createAction(GET_LEAGUE, getLeagueData);
export const getMatch = createAction(GET_MATCH, getMatchData);

const initialState = {
  data: {
    summoner: {
      accountId: "",
      id: "",
      name: "",
      profileIconId: 0,
      puuid: "",
      revisionDate: 0,
      summonerLevel: 0
    },
    league: {
      freshBlood: false,
      hotStreak: false,
      inactive: false,
      leagueId: "",
      leagueName: "",
      leaguePoints: 0,
      losses: 0,
      position: "",
      queueType: "",
      rank: "",
      summonerId: "",
      summonerName: "",
      tier: "",
      veteran: false,
      wins: 0,
    },
    match: {
      endIndex: 0,
      matches: [],
      startIndex: 0,
      totalGames: 0
    }
  }
}

// export default handleActions({
//   ...pender({
//       type: GET_API,
//       onSuccess: (state, action) => {
//           const { accountId, id, name, profileIconId, puuid, revisionDate, summonerLevel } = action.payload.data;
//           return {
//             data: {
//                 accountId,
//                 id,
//                 name,
//                 profileIconId,
//                 puuid,
//                 revisionDate,
//                 summonerLevel,
//               }
//           }
//       }
//   })
// }, initialState);


const reducer = handleActions({}, initialState);

export default applyPenders(reducer, [
  {
    type: GET_SUMMONER, 
    onSuccess: (state, action) => { 
        const { accountId, id, name, profileIconId, puuid, revisionDate, summonerLevel } = action.payload.data;
        return {
          data: {
            summoner: {
              accountId,
              id,
              name,
              profileIconId,
              puuid,
              revisionDate,
              summonerLevel,
            }
          }
        }
    }
  },
  {
    type: GET_LEAGUE, 
    onSuccess: (state, action) => { 
      const { freshBlood, hotStreak, inactive, leagueId, leagueName, leaguePoints, losses, position, queueType, rank, summonerId, summonerName, tier, veteran, wins } = action.payload.data[0];
      return {
        data: {
          summoner : state.data.summoner,
          league: {
            freshBlood,
            hotStreak,
            inactive,
            leagueId,
            leagueName,
            leaguePoints,
            losses,
            position,
            queueType,
            rank,
            summonerId,
            summonerName,
            tier: tier.toLowerCase(),
            veteran,
            wins
          }    
        }
      }
    }
  },
  {
    type: GET_MATCH, 
    onSuccess: (state, action) => { 
      const { endIndex, matches, startIndex, totalGames } = action.payload.data;
        return {
        data: {
          summoner: state.data.summoner,
          league: state.data.league,
          match: {
            endIndex,
            matches,
            startIndex,
            totalGames
          }
        }
      }
    }
  },
]);
