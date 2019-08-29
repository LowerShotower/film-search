import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from '../';
import hasPreloader from '../hocs/withPreloader';
import './movieList.css';

const moviesList = ({ moviesList, error }) => {
  return (
    <Fragment>
      {
        error ?
          (<p className="error" > {error}</p>) :
          (<ul className="movie-list">
            {moviesList.map(({ Title: name, Type: type, Poster: imgUrl, Year: year }, id) => (
              <MovieItem key={id} name={name} imgUrl={imgUrl} year={year} type={type} />
            ))}
          </ul>)
      }
    </Fragment>
  )
}

moviesList.propTypes = {
  moviesList: PropTypes.array,
}

moviesList.defaultProps = {
  moviesList: [],
}

export default hasPreloader(moviesList);
