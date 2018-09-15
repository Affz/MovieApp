import { all, takeLatest } from 'redux-saga/effects';
import * as constants from '../Actions/Searchbar';
import { getsearchdetails } from './SearchBarSaga';
export default function* SearchBarRootSaga() {
    yield all([
        takeLatest(constants.SEARCHDETAILS, getsearchdetails)
    ]);
}
