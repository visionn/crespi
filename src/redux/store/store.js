import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MERGE } from '../reducers/merge';

// store creation
export const STORE = compose(applyMiddleware(thunk))(createStore)(MERGE);
