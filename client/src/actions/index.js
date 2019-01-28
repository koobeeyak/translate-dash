export const GET_TRANSLATIONS_REQUEST = 'GET_TRANSLATIONS_REQUEST';
export const GET_TRANSLATIONS_FAILURE = 'GET_TRANSLATIONS_FAILURE';
export const GET_TRANSLATIONS_SUCCESS = 'GET_TRANSLATIONS_SUCCESS';

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
