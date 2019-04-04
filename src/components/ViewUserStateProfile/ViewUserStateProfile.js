import React from 'react';
// import AnimatedNumber from 'react-animated-number';
import './ViewUserStateProfile.scss';



const ViewUserStateProfile = ({ summoner, league }) => {
  return (
      <div className="user-profile-wrapper">
        <div className="user-profile-img-wrapper">
          <img src={`//opgg-static.akamaized.net/images/profile_icons/profileIcon${summoner.profileIconId}.jpg`} alt="ProfileImg"/>
          <img src={`//opgg-static.akamaized.net/images/borders2/${league.tier}.png`} alt="ProfileImgBorder"/>
          <span className="profileLevel" alt="UserLevel">{summoner.summonerLevel}</span>
        {/* <AnimatedNumber 
                component="span" 
                default={0}
                value="1452"
                style={{
                    transition: '3s ease-out',
                    fontSize: 48,
                    color: '#333',
                    fontWeight:'bold',
                    transitionProperty:'background-color, color, opacity'
                }}
                duration={300}
            /> */}
      </div>
        <div className="user-profile-league-section">
          {/* <div className="user-profile-leagueName">{league.leagueName}</div> */}
          {/* <div className="user-profile-name">{name}</div>
          <div className="user-profile-winlose">{winLose}</div>
          <div className="user-profile-leaguepoint">{point}</div>
          <div className="user-profile-tier">{`${league.tier} ${league.rank}`}</div>
          <div className="user-profile-inactive">{league.inactive}</div>
          <div className="user-profile-position">{league.position}</div> */}
        </div>
      </div>
  );
};

export default ViewUserStateProfile;