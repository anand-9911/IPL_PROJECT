import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import matchReducer from './matchReducer';

export default combineReducers({
  authReducer,
  alertReducer,
  matchReducer,
});
