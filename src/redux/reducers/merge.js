import {INFO_REDUCER} from './infoReducer';
import {combineReducers} from 'redux';

const COMBINER = combineReducers({
  info: INFO_REDUCER
});

export default COMBINER;
