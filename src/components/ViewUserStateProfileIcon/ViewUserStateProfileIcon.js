import React from 'react';
// import AnimatedNumber from 'react-animated-number';
import './ViewUserStateProfileIcon.scss';

const ViewUserStateProfileIcon = ({ profileIconId, tier, level}) => {
  return (
      <div className="user-profile-img-wrapper">
        <img src={`//opgg-static.akamaized.net/images/profile_icons/profileIcon${profileIconId}.jpg`} alt="ProfileImg"/>
        <img src={`//opgg-static.akamaized.net/images/borders2/${tier}.png`} alt="ProfileImgBorder"/>
        <span className="profileLevel" alt="UserLevel">{level}</span>
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
  );
};

export default ViewUserStateProfileIcon;