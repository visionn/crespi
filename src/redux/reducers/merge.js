import { combineReducers } from 'redux';
import { LOOKING_AT } from '../../common/reducer/lookingAt';
import { LANGUAGE } from '../../common/reducer/language';
import { DESCRIPTION } from '../../components/Description/redux/reducer';
import { LOADING } from '../../components/Loading/redux/reducer';

export const MERGE = combineReducers({
  looking: LOOKING_AT,
  language: LANGUAGE,
  description: DESCRIPTION,
  loading: LOADING,
});
