import {
  SET_USERS,
  SET_USER_DETAIL,
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
      case SET_USER_DETAIL:
      return Object.assign({}, state, {
        userDetail: action.userDetail || {}
      });
    default:
      return state
  }
}


export default myApp;
