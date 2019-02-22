import React from 'react';
import AnimatedNumber from 'react-animated-number';
import './ViewUserStateProfile.scss';

const ViewUserStateProfile = ({ summoner, league}) => {
  return (
    // <div className="user-profile-img-section">
    //     <img src={`//opgg-static.akamaized.net/images/profile_icons/profileIcon${summoner.profileIconId}.jpg`} alt="ProfileImg"/>
    //     <img src={`//opgg-static.akamaized.net/images/borders2/${league.tier}.png`} alt="ProfileImgBorder"/>
    //     <span className="profileLevel" alt="UserLevel">{summoner.summonerLevel}</span>
    // </div>
    <div className="container">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
    </div>
  );
};

export default ViewUserStateProfile;