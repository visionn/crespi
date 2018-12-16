import {createStore} from 'redux';
import COMBINER from '../reducers/merge';
// store creation
export const STORE = createStore(
  COMBINER,
  {info: 'HIDE'}
);
