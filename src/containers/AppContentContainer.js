import React, { Component } from 'react';
import ViewUserStateProfile from 'components/ViewUserStateProfile';
import { connect } from 'react-redux';




class AppContentContainer extends Component {
 
  render() {
    const { summoner, league } = this.props;
    return (
      summoner.id ?
        <ViewUserStateProfile 
          summoner={summoner}
          league={league}
        />
        : (
          <>
          </>
        )
    );
  }
}

const mapStateToProps = (state) => ({
  summoner: state.summoner.data,
  league: state.league.data
});

export default connect(
  mapStateToProps,
)(AppContentContainer);