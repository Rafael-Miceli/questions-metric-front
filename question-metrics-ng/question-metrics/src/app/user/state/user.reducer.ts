export function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        maskUserName: action.payload
      };

    default:
      return state;
  }
}
