import { combineReducers } from 'redux';
import MovieAppReducer from '../MovieApp/Reducers/MovieApp';
import SearchBarReducer from '../SearchBar/Reducer/Searchbar';

export const mainReducer = combineReducers({
  MovieReducer: MovieAppReducer,
  SearchReducer: SearchBarReducer
});