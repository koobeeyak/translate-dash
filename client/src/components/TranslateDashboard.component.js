import React, { Component } from 'react';

import TranslateInput from './TranslateInput.container';
import TranslateTable from './TranslateTable.container';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';

class TranslateDashboard extends Component {
  componentDidMount() {
    this.props.fetchAPIData();
  }

  render() {
    return (
      <div className="translate_dashboard">
        {this.props.areTranslationsLoading && <LoadingMessage />}
        {this.props.translationsErrorMessage
          && <ErrorMessage errorMessage={this.props.translationsErrorMessage} />}
        {this.props.currentInterface === 'translateInput' && <TranslateInput />}
        {this.props.currentInterface === 'translateTable' && <TranslateTable />}
      </div>
    );
  }
}

export default TranslateDashboard;
