import TYPES from '../types';
import { fetchMovies } from "../../services/api";

export const updateInput = (value) => ({
  type: TYPES.UPDATE_INPUT,
  payload: { value }
});

export const toggleInput = () => ({ type: TYPES.TOGGLE_INPUT, })

export const focusInput = () => ({ type: TYPES.FOCUS_INPUT, })

export const requestMovies = (movie, page) => dispatch => {
  dispatch(moviesAreLoading(true));
  fetchMovies({ movie, page }).then(({ data }) => {
    dispatch(moviesAreLoading(false));
    if (data.Response === 'True') {
      dispatch(updateMoviesError(''));
      dispatch(updateMoviesList(data.Search));
    } else {
      dispatch(updateMoviesError(data.Error));
    }
  }).catch((error) => {
    dispatch(moviesAreLoading(false));
    dispatch(updateMoviesError(''));
  })
}

const updateMoviesList = (moviesList) => ({
  type: TYPES.UPDATE_MOVIES_LIST,
  payload: { moviesList }
});

const updateMoviesError = (errorMsg) => ({
  type: TYPES.UPDATE_MOVIES_ERROR,
  payload: { error: errorMsg }
})
const moviesAreLoading = (areLoading) => ({
  type: TYPES.MOVIES_ARE_LOADING,
  payload: { areLoading }
})