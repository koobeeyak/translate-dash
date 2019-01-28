import React, { Component } from 'react';

import TranslateInput from './TranslateInput.container';

class TranslateDashboard extends Component {
  componentDidMount() {
    this.props.fetchAPIData();
  }

  render() {
    return (
      <div className="translate_dashboard">
        <TranslateInput />
      </div>
    );
  }
}

export default TranslateDashboard;
