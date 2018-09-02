import { User } from '../user';

export interface UserState {
    currentUser: User;
  }

export function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        usernameLoggedIn: action.payload
      };
    case 'LOAD_LOGIN':
      return {
        ...state,
        usernameLoggedIn: action.payload
      };

    default:
      return state;
  }
}
