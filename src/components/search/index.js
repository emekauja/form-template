import * as React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import './elements.css';

const Search = ({ text, onChange }) => (
  <>
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Search Templates"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchIcon className="search-icon" />
    </div>
  </>
);

Search.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
