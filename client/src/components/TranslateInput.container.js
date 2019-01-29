import { connect } from 'react-redux';

import {
  updateTranslationInputText,
  postTranslationRequest,
  changeInterface,
  updateErrorMessage,
} from '../actions';
import { translationInputTextSelector, translationsLoadingSelector } from '../reducers/translations';
import TranslateInputComponent from './TranslateInput.component';

const mapStateToProps = ({ translations }) => ({
  translationInputText: translationInputTextSelector(translations),
  areTranslationsLoading: translationsLoadingSelector(translations),
})

const mapDispatchToProps = dispatch => ({
  changeInterface: nextInterface => dispatch(changeInterface(nextInterface)),
  updateTranslationInputText:
    translationInputText => dispatch(updateTranslationInputText(translationInputText)),
  postTranslationRequest:
    translationInputText => {
      if (!translationInputText) {
        return dispatch(updateErrorMessage('Please enter a message to be translated.'));
      } else {
        return dispatch(postTranslationRequest(translationInputText));
      }
    },
})

const TranslateInput = connect(mapStateToProps, mapDispatchToProps)(TranslateInputComponent);

export default TranslateInput;
