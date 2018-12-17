import {INFO_REDUCER} from './infoReducer';
import {combineReducers} from 'redux';

export const MERGE = combineReducers({
  info: INFO_REDUCER
});
