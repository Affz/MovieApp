import { MovieDetailsActions } from '../Actions/movieApp';
import * as constants from '../Actions/movieApp';
import { call, put } from 'redux-saga/effects';
import ExternalApi from '../../Utils/externalApi';

export function* getMovieDetails(actions: MovieDetailsActions) {
    try {
        var apiParameters = {
            url: 'https://ghibliapi.herokuapp.com/films',
            method: 'GET'
        };
        let response = yield call(ExternalApi.Api, apiParameters);
        yield put({ type: constants.MOVIEDETAILS_SUCCESS, payload: response.data });
    } catch (e) {
        var snackbarState = {
            display: true,
            prompt: 'Oops!! Something went wrong'
        };
        yield put({ type: constants.MOVIEDETAILS_FAILURE, payload: snackbarState });
    }
}