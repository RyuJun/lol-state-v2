import input from 'modules/input';
import summoner from 'modules/summoner';

import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    input,
    summoner,
    pender: penderReducer
});