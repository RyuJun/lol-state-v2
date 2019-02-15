import React, { Component } from 'react';
import SearchIdForm from 'components/SearchIdForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from 'modules/input';
import * as summonerActions from 'modules/summoner';



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
    const { SummonerActions }  = this.props;
    try {
        const s = SummonerActions.getSummoner(value);
        this.cancelRequest = s.cancel;
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
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeaderContainer);