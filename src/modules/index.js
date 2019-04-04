import input from 'modules/input';
// import summoner from 'modules/summoner';
// import match from 'modules/match';
// import league from 'modules/league';
import api from 'modules/api'; //applyPender 사용하다가 포기... 그다음  success가 안먹는당 좀더알아봅시다

import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    input,
    api,
    // summoner,
    // league,
    // match,
    pender: penderReducer
});