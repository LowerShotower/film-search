import React from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from '../';

const MovieList = ({ movieList }) => {
  return (
    <ul className="movie-list">
      {movieList.map(({ name, type, imgUrl, imdbID}, id) => (
        <MovieItem key={id} name={name} imgUrl={imgUrl} imdbID={imdbID} type={type}/>
      ))}
    </ul>
  )
}

MovieList.propTypes = {
  movieList: PropTypes.array,
}

MovieList.defaultProps = {
  movieList: [],
}

export default MovieList
