import { call, put, takeEvery } from 'redux-saga/effects';

import postTranslationAPICall from '../api/postTranslation';
import { POST_TRANSLATION_REQUEST, postTranslationFailure, postTranslationSuccess } from '../actions';

function* postTranslation({ translationInputText }) {
  try {
    const data = yield call(postTranslationAPICall, translationInputText);
    yield put(postTranslationSuccess(data));
  } catch (error) {
    yield put(postTranslationFailure(error.message));
  }
}

function* postTranslationSaga() {
  yield takeEvery(POST_TRANSLATION_REQUEST, postTranslation);
}

export default postTranslationSaga;
