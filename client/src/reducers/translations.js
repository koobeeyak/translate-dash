import {
  GET_TRANSLATIONS_REQUEST,
  GET_TRANSLATIONS_SUCCESS,
  GET_TRANSLATIONS_FAILURE,
  UPDATE_TRANSLATION_INPUT_TEXT
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
    case UPDATE_TRANSLATION_INPUT_TEXT:
      return {
        ...state,
        translationInputText: action.translationInputText,
      }
    default:
      return state;
  }
};

export const tranlsationsLoadingSelector = ({ loading }) => loading;
export const translationsErrorMessageSelector = ({ errorMessage }) => errorMessage;
export const translationsDataSelector = ({ data }) => data;
export const translationInputTextSelector = ({ translationInputText }) => translationInputText;
export const currentInterfaceSelector = ({ currentInterface }) => currentInterface;
