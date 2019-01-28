import {
  GET_TRANSLATIONS_REQUEST,
  GET_TRANSLATIONS_SUCCESS,
  GET_TRANSLATIONS_FAILURE,
} from '../actions';

const defaultState = {
  data: [],
  loading: false,
  errorMessage: '',
  currentInterface: 'translationInput',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_TRANSLATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TRANSLATIONS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case GET_TRANSLATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
