import { all, takeLatest } from 'redux-saga/effects';
import * as constants from '../Actions/movieApp';
import { getMovieDetails } from './MovieAppSaga';
export default function* MovieAppRootSaga() {
    yield all([
        takeLatest(constants.MOVIEDETAILS, getMovieDetails)
    ]);

}
