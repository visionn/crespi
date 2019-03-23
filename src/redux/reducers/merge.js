import { LOOKING_AT } from './lookingAt';
import { LANGUAGE } from './language';
import { DESCRIPTION } from './description';
import { LOADING } from './loading';
import { combineReducers } from 'redux';

export const MERGE = combineReducers({
  looking: LOOKING_AT,
  language: LANGUAGE,
  description: DESCRIPTION,
  loading: LOADING,
});
