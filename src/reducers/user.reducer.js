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
        return state.filter((user)=>user.id !== action.id);
      case 'EDIT_USER':
        return state.map((user)=>user.id === action.id ? {...user,editing:!user.editing}:user);
      case 'LIST_USER':
        return state;
      case '"GET_BY_USERID':
        return state.user.user.filter((user)=>{
          if(user.id === action.payload) {
            console.log("GET_BY_USERID",action);
            return user
          } 
        })
      default:
        return state;
    }
  }
  export default userReducer;
  