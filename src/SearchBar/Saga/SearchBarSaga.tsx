import * as constants from '../Actions/Searchbar';
import { call, put } from 'redux-saga/effects';
import ExternalApi from '../../Utils/externalApi';
import SearchDetailsActions, { SearchDetailsActionsCombine } from '../Actions/Searchbar';
export function* getsearchdetails(actions: SearchDetailsActionsCombine) {
    try {
        var apiParameters = {
            url: 'http://13.127.206.88/api/search?query=' + actions.query + '&sort=relevance',
            method: 'GET'
        };
        let response = yield call(ExternalApi.Api, apiParameters);
        yield put({ type: constants.SEARCHDETAILS_SUCCESS, payload: response.data, searchloader: true });
    } catch (e) {
        var snackbarState = {
            display: true,
            prompt: 'Oops!! Something went wrong'
        };
        yield put({ type: constants.SEARCHDETAILS, payload: snackbarState });
    }
}