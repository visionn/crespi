import {createStore} from 'redux';
import reducer form '../reducers';
// store works as a vault of redux states
const INITIAL_STATE = {
  video: false,
  zoom: false,
  cameraWatching: ''
};
export const STORE = createStore(reducer, INITIAL_STATE);
