import TYPES from '../types';
import { fetchMovies } from "../../services/api";

export const updateInput = (value) => {
  return {
    type: TYPES.UPDATE_INPUT,
    payload: {
      value
    }
  }
};

export const requestMovies = (movie, page) => dispatch => {
  dispatch(moviesAreLoading(true));
  fetchMovies({ movie, page }).then(({ data }) => {
    dispatch(moviesAreLoading(false));
    if (data.Response === 'True') {
      dispatch(updateMoviesError(''));
      console.log(data.Search)
      dispatch(updateMoviesList(data.Search));
    } else {
      throw new Error(data.Error);
    }
  }).catch((error) => {
    dispatch(moviesAreLoading(false));
    dispatch(updateMoviesError(error.message));
  })
}

const updateMoviesList = (moviesList) => ({
  type: TYPES.UPDATE_MOVIES_LIST,
  payload: {
    moviesList
  }

});

const updateMoviesError = (errorMsg) => ({
  type: TYPES.UPDATE_MOVIES_ERROR,
  payload: {
    error: errorMsg
  }
})
const moviesAreLoading = (areLoading) => ({
  type: TYPES.MOVIES_ARE_LOADING,
  payload: {
    areLoading
  }
})