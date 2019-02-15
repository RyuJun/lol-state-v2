import React from 'react';
import './SearchIdForm.scss';

const SearchIdForm = ({ value, onChange, onKeyPress }) => {
  return (
    <div className="search-form-wrapper">
      <input type="text" value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder="plzzz... Summoner name"/>
      <div className="logo-lol"></div>
    </div>
  );
};

export default SearchIdForm;