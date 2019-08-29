import TYPES from '../types.js';

const INIT_STATE = {
  moviesList: [],
  error: '',
  isLoading: false
}

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {

    case TYPES.UPDATE_MOVIES_LIST: console.log('up')
      return {
        ...state,
        moviesList: [...payload.moviesList]
      }
    case TYPES.UPDATE_MOVIES_ERROR:
      return {
        ...state,
        error: payload.error
      }
    case TYPES.MOVIES_ARE_LOADING:
      return {
        ...state,
        isLoading: payload.areLoading
      }

    default:
      return state;
  }
};
