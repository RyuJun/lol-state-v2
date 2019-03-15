import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import ApiDefault from 'lib/ApiDefault';

function getMatchData (accountId) {
  return ApiDefault.instance.get(`/match/v4/matchlists/by-account/${accountId}?api_key=${ApiDefault.key}`)
}
const GET_MATCH = 'GET_MATCH';

export const getMatch = createAction(GET_MATCH, getMatchData);

const initialState = {
  data   : {
    endIndex: 0,
    matches: [],
    startIndex: 0,
    totalGames: 0
  }
}

export default handleActions({
  ...pender({
      type: GET_MATCH,
      onSuccess: (state, action) => {
          const { endIndex, matches, startIndex, totalGames } = action.payload.data;
          return {
            data: {
                endIndex,
                matches,
                startIndex,
                totalGames
              }
          }
      }
  })
}, initialState);