import { INFO_REDUCER } from './info';
import { LOOKING_AT } from './lookingAt';
import { LANGUAGE } from './language';
import { DESCRIPTION } from './description';
<<<<<<< HEAD
=======
import { MOVE } from './move';
>>>>>>> 03d2b473717304eb575c5825895ef11c3c3ca3b7
import { LOADING } from './loading';
import { combineReducers } from 'redux';

export const MERGE = combineReducers({
  info: INFO_REDUCER,
  looking: LOOKING_AT,
  language: LANGUAGE,
  description: DESCRIPTION,
<<<<<<< HEAD
=======
  move: MOVE,
>>>>>>> 03d2b473717304eb575c5825895ef11c3c3ca3b7
  loading: LOADING,
});
