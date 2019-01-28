import React, { Component } from 'react';

import TranslateInput from './TranslateInput';

class TranslateDashBody extends Component {
  componentDidMount() {
    this.props.fetchAPIData();
  }

  render() {
    return (
      <div className="translate_dash_body">
        <TranslateInput />
      </div>
    );
  }
}

export default TranslateDashBody;
