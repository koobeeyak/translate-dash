export const GET_TRANSLATIONS_REQUEST = 'GET_TRANSLATIONS_REQUEST';
export const GET_TRANSLATIONS_FAILURE = 'GET_TRANSLATIONS_FAILURE';
export const GET_TRANSLATIONS_SUCCESS = 'GET_TRANSLATIONS_SUCCESS';
export const UPDATE_TRANSLATION_INPUT_TEXT = 'UPDATE_TRANSLATION_INPUT_TEXT';
export const POST_TRANSLATION_REQUEST = 'POST_TRANSLATION_REQUEST';
export const POST_TRANSLATION_FAILURE = 'POST_TRANSLATION_FAILURE';
export const POST_TRANSLATION_SUCCESS = 'POST_TRANSLATION_SUCCESS';
export const CHANGE_INTERFACE = 'CHANGE_INTERFACE';
export const UPDATE_ERROR_MESSAGE = 'UPDATE_ERROR_MESSAGE';

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

export const postTranslationRequest = translationInputText => ({
  type: POST_TRANSLATION_REQUEST,
  translationInputText,
});

export const postTranslationFailure = errorMessage => ({
  type: POST_TRANSLATION_FAILURE,
  errorMessage,
});

export const postTranslationSuccess = data => ({
  type: POST_TRANSLATION_SUCCESS,
  data,
});

export const changeInterface = nextInterface => ({
  type: CHANGE_INTERFACE,
  nextInterface,
});

export const updateErrorMessage = errorMessage => ({
  type: UPDATE_ERROR_MESSAGE,
  errorMessage,
});
