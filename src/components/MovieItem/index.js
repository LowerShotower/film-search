import React from 'react';
import PropTypes from 'prop-types';
import './movieItem.scss';

const MovieItem = ({ imgUrl, name, imdbID, year, type }) => {
  return (
    <li className='movie-item'>
      <div class="col movie-poster">
        <img src={imgUrl} alt="" className='movie-poster-img' />
      </div>
      <div class="col movie-description">
        <h4 className='movie-header movie-name'>{name}</h4>
        {/* <p className='movie-text movie-imdb'>{imdbID}</p> */}
        <p className='movie-text movie-year'>{year}</p>
        <p className='movie-text movie-type'>{type}</p>
      </div>
    </li>
  );
};

MovieItem.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  year: PropTypes.string,
  imdbID: PropTypes.string,
};

MovieItem.defaultProps = {
  imgUrl: '#',
  name: '',
  type: 'No type',
  year: 'No year',
  imdbID: null,

}

export default MovieItem;
