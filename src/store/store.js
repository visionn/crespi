import {createStore} from 'redux';
import REDUCER from '../reducers/reducer';
// store works as a vault of redux states
const INITIAL_STATE = {
  video: false,
  zoom: 1,
  cameraWatching: ''
};
export const STORE = createStore(REDUCER, INITIAL_STATE);
