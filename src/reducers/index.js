import { combineReducers } from 'redux';
import errors from './errors';
import locations from './locations';
import messages from './messages';

export default combineReducers({
  locations,
  errors,
  messages,
});
