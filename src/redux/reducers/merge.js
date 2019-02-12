import { INFO_REDUCER } from './info';
import { LOOKING_AT } from './lookingAt';
import { LANGUAGE } from './language';
import { DESCRIPTION } from './description';
import { MOVE } from './move';
import { LOADING } from './loading';
import { combineReducers } from 'redux';

export const MERGE = combineReducers({
  info: INFO_REDUCER,
  looking: LOOKING_AT,
  language: LANGUAGE,
  description: DESCRIPTION,
  move: MOVE,
  loading: LOADING,
});
