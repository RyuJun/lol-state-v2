import React, { Component } from 'react';
import ViewUserStateProfile from 'components/ViewUserStateProfile';
import { connect } from 'react-redux';




class AppContentContainer extends Component {
  render() {
    const { summoner, league, loading, error } = this.props;
    return (
      <>
       {
        loading
            ? (
              <div className="loading-gif"></div>
            )
            : (
                error
                    ? (<h2>에러발생</h2>)
                    : (
                        summoner.id ?
                        <ViewUserStateProfile 
                          summoner={summoner}
                          league={league}
                        />
                        : (
                          <>
                          </>
                        )
                      )
              )
        }
    </>
    );
  }
}

const mapStateToProps = (state) => ({
  summoner: state.summoner.data,
  league: state.league.data,
  loading: state.pender.pending['GET_MATCH'],
  error: state.pender.failure['GET_MATCH']
});

export default connect(
  mapStateToProps,
)(AppContentContainer);