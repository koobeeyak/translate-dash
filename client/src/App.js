import React, { Component } from 'react';
import TranslateDashboard from './components/TranslateDashboard.container';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TranslateDashboard />
      </div>
    );
  }
}

export default App;
