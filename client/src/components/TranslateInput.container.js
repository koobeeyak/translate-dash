import { connect } from 'react-redux';

import { updateTranslationInputText } from '../actions';
import { translationInputTextSelector } from '../reducers/translations';
import TranslateInputComponent from './TranslateInput.component';

const mapStateToProps = ({ translations }) => ({
  translationInputText: translationInputTextSelector(translations),
})

const mapDispatchToProps = dispatch => ({
  updateTranslationInputText:
    translationInputText => dispatch(updateTranslationInputText(translationInputText))
})

const TranslateInput = connect(mapStateToProps, mapDispatchToProps)(TranslateInputComponent);

export default TranslateInput;
