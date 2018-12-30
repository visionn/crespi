import { createStore } from 'redux';
import { MERGE } from '../reducers/merge';

// store creation
export const STORE = createStore(MERGE);
