import React from 'react';
import PropTypes from 'prop-types';
import MovieInput from '../MovieInput';

const MovieItem = ({ imgUrl, name, imdbID, year, type }) => {
  return (
    <li className="movie-item">
      <img src={imgUrl} alt="" />
      <h4>{name}</h4>
      <p>{imdbID}</p>
      <p>{year}</p>
      <p>{type}</p>
    </li>
  );
};


MovieItem.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

MovieInput.defaultProps = {
  name: '',
  type: '-'
}

export default MovieItem;
