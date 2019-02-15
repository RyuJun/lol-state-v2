import React, { Component } from 'react';
import SearchIdForm from 'components/SearchIdForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from 'modules/input';
import * as summonerActions from 'modules/summoner';


class AppHeaderContainer extends Component {
  handleChange = e => {
    const { value } = e.target;
    const { InputActions } = this.props;
    InputActions.setInput(value);
  }


  loadData = async (value) => {
    const { SummonerActions }  = this.props;
    // const { InputActions } = this.props;
    
    try {
        const p = SummonerActions.getSummoner(value);
        this.cancelRequest = p.cancel;
        // const response = await p;
        // console.log(response);
    } catch(e) {
        // console.log(e);
        // InputActions.setInput('');
        // alert('Summoner is not defiend');
    }
  }


  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const { value } = e.target;
      console.log(value)
      this.loadData(value);
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
  value: state.input.get('value'),
  summoner: state.summoner.data,
});
const mapDispatchToProps = (dispatch) => ({
  InputActions: bindActionCreators(inputActions, dispatch),
  SummonerActions : bindActionCreators(summonerActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeaderContainer);