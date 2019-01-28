import { connect } from 'react-redux';

import { changeInterface } from '../actions';
import { translationsDataSelector } from '../reducers/translations';
import TranslateTableComponent from './TranslateTable.component';

const mapStateToProps = ({ translations }) => ({
  translations: translationsDataSelector(translations),
})

const mapDispatchToProps = dispatch => ({
  changeInterface: nextInterface => dispatch(changeInterface(nextInterface)),
})

const TranslateTable = connect(mapStateToProps, mapDispatchToProps)(TranslateTableComponent);

export default TranslateTable;
