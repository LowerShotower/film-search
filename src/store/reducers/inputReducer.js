import TYPES from '../types.js';

const INIT_STATE = {
  value: '',
}

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.UPDATE_INPUT:
      return {
        ...state,
        value: payload.value
      }

    default:
      return state;
  }
};
