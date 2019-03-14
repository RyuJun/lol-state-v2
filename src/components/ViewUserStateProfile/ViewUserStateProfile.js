import React from 'react';
import ViewUserStateProfileIcon from  'components/ViewUserStateProfileIcon';
import ViewUserStateProfileLeague from  'components/ViewUserStateProfileLeague';
// import AnimatedNumber from 'react-animated-number';
import './ViewUserStateProfile.scss';

const ViewUserStateProfile = ({ summoner, league}) => {
  return (
      <div className="user-profile-wrapper">
        <ViewUserStateProfileIcon profileIconId={summoner.profileIconId} tier={league.tier} level={summoner.summonerLevel} />
        <ViewUserStateProfileLeague leagueName={league.leagueName} />
      </div>
  );
};

export default ViewUserStateProfile;