const INITIAL_STATE = {user: [], status:null, error:null, loading: false};
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case 'CREATE_USER':
          //console.log("CREATE_USER",action);
        //return state.user.concat([action.data]);
        //return {...state, action.payload}
        return {
            ...state,
            user: [
              ...state.user,
              {
                  userId: action.payload.userId,
                  name: action.payload.name,
                  email: action.payload.email
              }
            ]
        }
      case 'DELETE_USER':
        return state.user.filter((uu)=>uu.userId !== action.id);
      case 'LIST_USER':
        return state.user;
      case 'GET_BY_USERID':
        console.log("get by id", action);
        return state.user.filter((uu)=>uu.userId === action.id);
      default:
        return state.user;
    }
  }
  export default userReducer;
  