import React from 'react';
import './GetStore.scss';
import { connect } from 'react-redux';



const GetStore = ({value, summoner, loading, error}) => {
  return (
    <>
        {/* <div>
          <h3>{value}</h3>
          <h3>{summoner.id}</h3>
          <h3>{summoner.name}</h3>
          <h3>{summoner.profileIconId}</h3>
          <h3>{summoner.puuid}</h3>
          <h3>{summoner.revisionDate}</h3>
            <h3>{summoner.summonerLevel}</h3>
        </div> */}
       {
        loading
            ? (<div className="loading-gif"></div>)
            : (
                error
                    ? (<h2>에러발생</h2>)
                    : (
                        <div>
                            <h3>{value}</h3>
                            <h3>{summoner.id}</h3>
                            <h3>{summoner.name}</h3>
                        </div>
                      )
              )
        }
    </>
  );
};



const mapStateToProps = (state) => ({
  value: state.input.get('value'),
  summoner: state.summoner.data,
  loading: state.pender.pending['GET_SUMMONER'],
  error: state.pender.failure['GET_SUMMONER']
});

export default connect(
  mapStateToProps,
)(GetStore);