import { combineReducers } from 'redux';
import userReducer from './user.reducer';
//import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  userReducer,
  //form: formReducer, // <-- redux-form
});

export default rootReducer;