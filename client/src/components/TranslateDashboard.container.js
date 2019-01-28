import { connect } from 'react-redux';

import { getTranslationsRequest } from '../actions';
import TranslateDashboardComponent from './TranslateDashboard.component';

const mapDispatchToProps = dispatch => ({
  fetchAPIData: () => {
    dispatch(getTranslationsRequest());
  },
});

const TranslateDashboard = connect(null, mapDispatchToProps)(TranslateDashboardComponent);

export default TranslateDashboard;
