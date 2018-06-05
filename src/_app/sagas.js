import { all } from 'redux-saga/effects'

import { watchCountriesFetch } from '../countries/sagas';

export default function* rootSaga() {
  yield all([
    watchCountriesFetch()
  ]);
}