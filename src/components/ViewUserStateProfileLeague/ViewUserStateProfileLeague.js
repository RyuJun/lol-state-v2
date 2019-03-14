import React from 'react';
// import AnimatedNumber from 'react-animated-number';
import './ViewUserStateProfileLeague.scss';

const ViewUserStateProfileLeague = ({ leagueName }) => {
  return (
    <div className="user-profile-league-section">
    <div className="user-profile-leagueName">{leagueName}</div>
      {/* <div className="user-profile-name">{name}</div>
      <div className="user-profile-winlose">{winLose}</div>
      <div className="user-profile-leaguepoint">{point}</div>
      <div className="user-profile-tier">{`${league.tier} ${league.rank}`}</div>
      <div className="user-profile-inactive">{league.inactive}</div>
      <div className="user-profile-position">{league.position}</div> */}
    </div>
  );
};

export default ViewUserStateProfileLeague;