import { createStore } from 'redux';
import { MERGE } from '../reducers/merge';

// store creation
export const STORE = createStore(
  MERGE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
