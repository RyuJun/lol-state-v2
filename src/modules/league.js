import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import ApiDefault from 'lib/ApiDefault';

function getLeagueData (accountId) {
  return ApiDefault.instance.get(`/league/v4/positions/by-summoner/${accountId}?api_key=${ApiDefault.key}`)
}
const GET_LEAGUE = 'GET_LEAGUE';

export const getLeague = createAction(GET_LEAGUE, getLeagueData);

const initialState = {
  data   : {
    freshBlood: Boolean,
    hotStreak: Boolean,
    inactive: Boolean,
    leagueId: String,
    leagueName: String,
    leaguePoints: Number,
    losses: Number,
    position: String,
    queueType: String,
    rank: String,
    summonerId: String,
    summonerName: String,
    tier: "bronze",
    veteran: Boolean,
    wins: Number,
  }
}

export default handleActions({
  ...pender({
      type: GET_LEAGUE,
      onSuccess: (state, action) => {
          const { freshBlood, hotStreak, inactive, leagueId, leagueName, leaguePoints, losses, position, queueType, rank, summonerId, summonerName, tier, veteran, wins } = action.payload.data[0];
          return {
            data: {
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
  })
}, initialState);