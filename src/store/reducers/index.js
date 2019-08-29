import { combineReducers } from 'redux';
import movies from './movieReducer';
import input from './inputReducer';
const rootReducer = combineReducers({ movies, input });

export default rootReducer;