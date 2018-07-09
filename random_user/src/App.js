import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import { fetchUsers } from './actions'

import UserList from './components/UserList';

class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">xintong</h1>
        </header>
        <div>
        <UserList users={this.props.users} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(App);
