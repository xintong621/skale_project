import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Router, Switch, Route } from 'react-router'
import './App.css';

import history from './routerHistory';

import { fetchUsers } from './actions'

import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    return (
      <div className="App">
       <Router history={history}>
          <Switch>
            <Route exact={true} path="/" render={()=>
              <div>
                <UserList users={this.props.users} />
              </div>
            }/>
            <Route exact={true} path="/detail" render={()=><UserDetail userDetail={this.props.userDetail} />}/>
          </Switch>
        </Router>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  users: state.users,
  userDetail: state.userDetail,
});

export default connect(mapStateToProps)(App);
