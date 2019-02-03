import { INFO_REDUCER } from './info';
import { LOOKING_AT } from './lookingAt';
import { LANGUAGE } from './language';
import { DESCRIPTION } from './description';
import { TOUCH } from './touch';
import { combineReducers } from 'redux';

export const MERGE = combineReducers({
  info: INFO_REDUCER,
  looking: LOOKING_AT,
  language: LANGUAGE,
  description: DESCRIPTION,
  touch: TOUCH,
});
