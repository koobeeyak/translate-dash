import { call, put, takeEvery } from 'redux-saga/effects';

import getTranslationsAPICall from '../api/getTranslations';
import { GET_TRANSLATIONS_REQUEST, getTranslationsFailure, getTranslationsSuccess } from '../actions';

function* getTranslations() {
  try {
    const data = yield call(getTranslationsAPICall);
    yield put(getTranslationsSuccess(data));
  } catch (error) {
    yield put(getTranslationsFailure(error.message));
  }
}

function* getTranslationsSaga() {
  yield takeEvery(GET_TRANSLATIONS_REQUEST, getTranslations);
}

export default getTranslationsSaga;
