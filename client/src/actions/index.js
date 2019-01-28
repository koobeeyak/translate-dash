export const GET_TRANSLATIONS_REQUEST = 'GET_TRANSLATIONS_REQUEST';
export const GET_TRANSLATIONS_FAILURE = 'GET_TRANSLATIONS_FAILURE';
export const GET_TRANSLATIONS_SUCCESS = 'GET_TRANSLATIONS_SUCCESS';
export const UPDATE_TRANSLATION_INPUT_TEXT = 'UPDATE_TRANSLATION_INPUT_TEXT';

export const getTranslationsRequest = () => ({
  type: GET_TRANSLATIONS_REQUEST,
});

export const getTranslationsFailure = errorMessage => ({
  type: GET_TRANSLATIONS_FAILURE,
  errorMessage,
});

export const getTranslationsSuccess = data => ({
  type: GET_TRANSLATIONS_SUCCESS,
  data,
});

export const updateTranslationInputText = translationInputText => ({
  type: UPDATE_TRANSLATION_INPUT_TEXT,
  translationInputText,
});
