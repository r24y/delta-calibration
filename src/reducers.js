import { combineReducers } from 'redux';

import serverConnection from './server/serverConnectionReducer';
import serial from './networking/serialReducer';

const defaultState = {};

const childReducers = combineReducers({
  serverConnection,
  serial,
});

export default function(state = defaultState, action) {
  return childReducers.apply(this, arguments);
}
