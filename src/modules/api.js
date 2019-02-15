import { handleActions, createAction } from 'redux-actions';
import { pender, applyPenders } from 'redux-pender';
import ApiDefault from 'lib/ApiDefault';

function getSummonerData (Summoner) {
  return ApiDefault.instance.get(`/summoner/v4/summoners/by-name/${Summoner}?api_key=${ApiDefault.key}`)
}
function getMatchData (accountId) {
  return ApiDefault.instance.get(`/match/v4/matchlists/by-account/${accountId}?api_key=${ApiDefault.key}`)
}

const GET_SUMMONER = 'GET_SUMMONER';
const GET_MATCH    = 'GET_MATCH';

export const getSummoner = createAction(GET_SUMMONER, getSummonerData);
export const getMatch    = createAction(GET_MATCH, getMatchData);

const initialState = {
  data: {
    summoner: {
      accountId: "",
      id: "",
      name: "",
      profileIconId: Number,
      puuid: "",
      revisionDate: Number,
      summonerLevel: Number
    },
    match: {
      endIndex: Number,
      matches: Array,
      startIndex: Number,
      totalGames: Number
    }
  }
}

const reducer = handleActions({}, initialState);

export default applyPenders(reducer, [
  {
    type: GET_SUMMONER, 
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
            },
          }
      }
    }
  },
  {
    type: GET_MATCH, 
    onSuccess: (state, action) => { 
        const { endIndex, matches, startIndex, totalGames } = action.payload.data;
        return {
          data:{
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
// export default handleActions({
//   ...pender({
//       type: GET_API,
//       onSuccess: (state, action) => {
//           const { accountId, id, name, profileIconId, puuid, revisionDate, summonerLevel } = action.payload.data;
//           return {
//             data:{
//               summoner: {
//                 accountId,
//                 id,
//                 name,
//                 profileIconId,
//                 puuid,
//                 revisionDate,
//                 summonerLevel,
//               }
//             }
//           }
//       }
//   })
// }, initialState);