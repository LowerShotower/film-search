import TYPES from '../types.js';

const INIT_STATE = {
  movieList: [
    {
      name: 'first',
      type: 'scary',
      imgUrl: '#',
      imdbID: '3',
      year: '1213'
    }
  ]
}

export default  (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.GET_MOVIES:

    default:
      return state;
  }
};
