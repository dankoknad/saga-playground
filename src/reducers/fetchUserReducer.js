
export const user = (state = {}, action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return {
        ...state,
        user: action.user
      }

    default:
      return state
  }
}
