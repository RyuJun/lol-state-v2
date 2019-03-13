import React, { Component } from 'react';
import SearchIdForm from 'components/SearchIdForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from 'modules/input';
import * as summonerActions from 'modules/summoner';
import * as leagueActions from 'modules/league';
import * as matchActions from 'modules/match';




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
    const { SummonerActions, LeagueActions, MatchActions }  = this.props;
    try {
        const s = await SummonerActions.getSummoner(value);
        const l = await LeagueActions.getLeague(s.data.id);
        const m = await MatchActions.getMatch(s.data.accountId);
        this.cancelRequest = s.cancel;
        this.cancelRequest = l.cancel;
        this.cancelRequest = m.cancel;
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
  SummonerActions : bindActionCreators(summonerActions, dispatch),
  LeagueActions: bindActionCreators(leagueActions, dispatch),
  MatchActions: bindActionCreators(matchActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeaderContainer);