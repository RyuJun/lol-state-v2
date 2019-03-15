import React from 'react';
import './SearchIdForm.scss';

const SearchIdForm = ({ onKeyPress }) => {
  return (
    <div className="search-form-wrapper">
      <input type="text" onKeyPress={onKeyPress} placeholder="Summoner Name" />
      <div className="logo-lol"></div>
    </div>
  );
};

export default SearchIdForm;