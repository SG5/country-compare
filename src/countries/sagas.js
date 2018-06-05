import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios/index';

import * as actions from './actions';

function* fetchCountry() {
  const countries = yield call(() =>
    axios.get('/data/countries.json').then(response => response.data)
  );
  yield put({ type: actions.FETCH_COUNTRIES_SUCCESS, payload: countries });
}

export function* watchCountriesFetch() {
  yield takeLatest(actions.FETCH_COUNTRIES, fetchCountry)
}
