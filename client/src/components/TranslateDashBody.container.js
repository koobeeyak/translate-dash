import { connect } from 'react-redux';

import { getTranslationsRequest } from '../actions';
import TranslateDashBodyComponent from './TranslateDashBody.component';

const mapDispatchToProps = dispatch => ({
  fetchAPIData: () => {
    dispatch(getTranslationsRequest());
  },
});

const TranslateDashBody = connect(null, mapDispatchToProps)(TranslateDashBodyComponent);

export default TranslateDashBody;
