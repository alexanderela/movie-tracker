import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { moviesReducer } from './moviesReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
});
