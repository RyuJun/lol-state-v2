import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import ApiDefault from 'lib/ApiDefault';

function getApiData (Summoner) {
  return ApiDefault.instance.get(`/summoner/v4/summoners/by-name/${Summoner}?api_key=${ApiDefault.key}`)
}

const GET_API = 'GET_API';

export const getApi = createAction(GET_API, getApiData);

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

export default handleActions({
  ...pender({
      type: GET_API,
      onSuccess: (state, action) => {
          const { accountId, id, name, profileIconId, puuid, revisionDate, summonerLevel } = action.payload.data;
          return {
            data:{
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
  })
}, initialState);


// const reducer = handleActions({}, initialState);

// export default applyPenders(reducer, [
//   {
//     type: GET_SUMMONER, 
//     onSuccess: (state, action) => { 
//         const { accountId, id, name, profileIconId, puuid, revisionDate, summonerLevel } = action.payload.data;
//         return {
//           data:{
//             summoner: {
//               accountId,
//               id,
//               name,
//               profileIconId,
//               puuid,
//               revisionDate,
//               summonerLevel,
//             },
//           }
//       }
//     }
//   },
//   {
//     type: GET_MATCH, 
//     onSuccess: (state, action) => { 
//         const { endIndex, matches, startIndex, totalGames } = action.payload.data;
//         return {
//           data:{
//             match: {
//               endIndex,
//               matches,
//               startIndex,
//               totalGames
//             }
//           }
//         }
//     }
//   },
// ]);
