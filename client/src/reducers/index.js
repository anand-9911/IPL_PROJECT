import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import matchReducer from './matchReducer';
import deliveryReducer from './deliveryReducer';

export default combineReducers({
  authReducer,
  alertReducer,
  matchReducer,
  deliveryReducer,
});
