import React from 'react';
import propTypes from 'prop-types';
import MovieInput from '../MovieInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Search.scss';

const Search = ({ onChange, value, id, ...attrs }) => {
  return (
    <div className='search'>
      <MovieInput id={id} onChange={onChange} className='search__input' value={value} {...attrs} />
      <div className='search__menu-btn'>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  )
}

Search.propTypes = {
  id: propTypes.node.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
}

export default Search;
