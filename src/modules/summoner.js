import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import ApiDefault from 'lib/ApiDefault';

function getSummonerData (Summoner) {
  return ApiDefault.instance.get(`/summoner/v4/summoners/by-name/${Summoner}?api_key=${ApiDefault.key}`)
}
const GET_SUMMONER = 'GET_SUMMONER';

export const getSummoner = createAction(GET_SUMMONER, getSummonerData);

const initialState = {
  data   : {
    accountId: "",
    id: "",
    name: "",
    profileIconId: Number,
    puuid: "",
    revisionDate: Number,
    summonerLevel: Number
  }
}

export default handleActions({
  ...pender({
      type: GET_SUMMONER,
      onSuccess: (state, action) => {
          const { accountId, id, name, profileIconId, puuid, revisionDate, summonerLevel } = action.payload.data;
          return {
            data: {
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
  })
}, initialState);