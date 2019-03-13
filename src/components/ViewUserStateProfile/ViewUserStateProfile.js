import React from 'react';
// import AnimatedNumber from 'react-animated-number';
import './ViewUserStateProfile.scss';

const ViewUserStateProfile = ({ summoner, league}) => {
  console.log(summoner);
  return (
      <div className="user-profile-wrapper">
        <div className="user-profile-img-section">
            <div className="user-profile-img-wrapper">
              <img src={`//opgg-static.akamaized.net/images/profile_icons/profileIcon${summoner.profileIconId}.jpg`} alt="ProfileImg"/>
              <img src={`//opgg-static.akamaized.net/images/borders2/${league.tier}.png`} alt="ProfileImgBorder"/>
              <span className="profileLevel" alt="UserLevel">{summoner.summonerLevel}</span>
            </div>
        </div>
        <div className="user-profile-content-section">
          <div className="user-profile-name">{summoner.name}</div>
          <div className="user-profile-winlose">{`Win ${league.wins} / Losses ${league.losses}`}</div>
          <div className="user-profile-leaguepoint">{league.leaguePoints}</div>
          <div className="user-profile-tier">{`${league.tier} ${league.rank}`}</div>
          <div className="user-profile-inactive">{league.inactive}</div>
          <div className="user-profile-position">{league.position}</div>
        </div>
        
      </div>
      // <div className="container">
      //     <div className="item">1</div>
      //     <div className="item">2</div>
      //     <div className="item">3</div>
      //     <div className="item">4</div>
      //     <div className="item">5</div>
      // </div>
  );
};

export default ViewUserStateProfile;