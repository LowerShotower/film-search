import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from '../';
import hasPreloader from '../hocs/withPreloader';
import './movieList.scss';

const moviesList = ({ moviesList, error }) => {
  return (
    <div className='list-wrapper'>
      {
        error ?
          (
            <div className="error-block">
              <p className="error">{error}</p>
            </div>
          ) :
          (<ul className="movie-list">
            {moviesList.map(({ Title: name, Type: type, Poster: imgUrl, Year: year }, id) => (
              <MovieItem key={id} name={name} imgUrl={imgUrl} year={year} type={type} />
            ))}
          </ul>)
      }
    </div>
  )
}

moviesList.propTypes = {
  moviesList: PropTypes.array,
}

moviesList.defaultProps = {
  moviesList: [],
}

export default hasPreloader(moviesList);
