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
