import { combineReducers } from 'redux';
import UserReducer from './user.reducer';
//import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  //form: formReducer, // <-- redux-form
});

export default rootReducer;