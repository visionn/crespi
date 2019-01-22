import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MERGE } from '../reducers/merge';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store creation
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
)
export const STORE = createStore(MERGE, enhancer);
