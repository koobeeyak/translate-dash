import {
  GET_TRANSLATIONS_REQUEST,
  GET_TRANSLATIONS_SUCCESS,
  GET_TRANSLATIONS_FAILURE,
  UPDATE_TRANSLATION_INPUT_TEXT,
  POST_TRANSLATION_REQUEST,
  POST_TRANSLATION_SUCCESS,
  POST_TRANSLATION_FAILURE,

} from '../actions';

const defaultState = {
  data: [],
  loading: false,
  errorMessage: '',
  currentInterface: 'translationInput',
  translationInputText: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_TRANSLATIONS_REQUEST:
    case POST_TRANSLATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TRANSLATIONS_SUCCESS:
    case POST_TRANSLATION_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case GET_TRANSLATIONS_FAILURE:
    case POST_TRANSLATION_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      };
    case UPDATE_TRANSLATION_INPUT_TEXT:
      return {
        ...state,
        translationInputText: action.translationInputText,
      }
    default:
      return state;
  }
};

export const translationsLoadingSelector = ({ loading }) => loading;
export const translationsErrorMessageSelector = ({ errorMessage }) => errorMessage;
export const translationsDataSelector = ({ data }) => data;
export const translationInputTextSelector = ({ translationInputText }) => translationInputText;
export const currentInterfaceSelector = ({ currentInterface }) => currentInterface;
