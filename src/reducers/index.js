import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { favoritesReducer } from './favoritesReducer';
import { moviesReducer } from './moviesReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  movies: moviesReducer,
});
