import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import { fetchUsers } from './actions'

class App extends Component {

  componentWillMount() {
    console.log('...');
    this.props.dispatch(fetchUsers());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">xintong</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect()(App);
