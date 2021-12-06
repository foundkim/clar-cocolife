import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import locations from './locations';
import messages from './messages';

export default combineReducers({
  auth,
  locations,
  errors,
  messages,
});
