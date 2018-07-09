import {
  SET_USERS,
} from './actions';

const initialState = {
  users: []
};

function myApp(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return Object.assign({}, state, {
        users: action.users || [],
        loading: false
      });
    default:
      return state
  }
}


export default myApp;
