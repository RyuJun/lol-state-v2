import React, { Component } from 'react';
import SearchIdForm from 'components/SearchIdForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ApiDefault from 'lib/ApiDefault';

import * as inputActions from 'modules/input';
import * as apiActions from 'modules/api';
// import * as summonerActions from 'modules/summoner';
// import * as leagueActions from 'modules/league';
// import * as matchActions from 'modules/match';




class AppHeaderContainer extends Component {
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      const { value } = e.target;
      const { InputActions } = this.props;
      InputActions.setInput(value);
      this.loadData(value);
    }
  }

  loadData = async (value) => {
    // const { SummonerActions, LeagueActions, MatchActions }  = this.props;
    try {
      const summoner = await ApiDefault.instance.get(`/summoner/v4/summoners/by-name/${value}?api_key=${ApiDefault.key}`);
      const league   = await ApiDefault.instance.get(`/league/v4/positions/by-summoner/${summoner.data.id}?api_key=${ApiDefault.key}`); 
      const match    = await ApiDefault.instance.get(`/match/v4/matchlists/by-account/${summoner.data.accountId}?api_key=${ApiDefault.key}`);
      // const m = await ApiDefault.instance.get(`/match/v4/matchlists/by-account/${s.accountId}?api_key=${ApiDefault.key}`);
      // const s = await SummonerActions.getSummoner(value);
      // const l = await LeagueActions.getLeague(s.data.id);
      // const m = await MatchActions.getMatch(s.data.accountId);
      // this.cancelRequest = s.cancel;
      // this.cancelRequest = l.cancel;
      // this.cancelRequest = m.cancel;
      console.log(summoner.data);
      console.log(league.data[0]);
      console.log(match.data);
    } catch(e) {
        console.log(e);
    }
  }


  
  render() {
      const { value } = this.props;
      const { handleChange, handleKeyPress } = this;

      return (
          <SearchIdForm 
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
      );
  }
}

const mapStateToProps = (state) => ({
  summoner: state.summoner.data,
});
const mapDispatchToProps = (dispatch) => ({
  InputActions: bindActionCreators(inputActions, dispatch),
  ApiActions: bindActionCreators(apiActions, dispatch)
  // SummonerActions : bindActionCreators(summonerActions, dispatch),
  // LeagueActions: bindActionCreators(leagueActions, dispatch),
  // MatchActions: bindActionCreators(matchActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeaderContainer);