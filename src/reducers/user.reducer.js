const INITIAL_STATE = { users: [], user:{}, status:null, error:null, loading: false};
const userReducer = (state=INITIAL_STATE, action) => {
  console.log(INITIAL_STATE, state);
    switch(action.type) {
      case 'CREATE_USER':
        return {
            ...state,
            user: action.payload
        }
      case 'DELETE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload)
        };
      case 'LIST_USER':
        return {
          ...state,
          users: action.payload
        };
      case 'GET_BY_USERID':
        //console.log(state.users, action, state.users.find(user => user.id == action.payload));
        return {
          ...state,
          user: state.users.find(user => user.id == action.payload)
        };
      default:
        return state.users;
    }
  }
  export default userReducer;
  