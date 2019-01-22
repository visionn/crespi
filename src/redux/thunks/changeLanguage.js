import { CHANGE_LANGUAGE } from '../actions/actions';
export const LANGUAGE = () => {
  return (dispatch, getState) => {
    if(getState.language =! 'ita') {
      dispatch(CHANGE_LANGUAGE('ita'));
    }
    else {
      dispatch(CHANGE_LANGUAGE('eng'))
    }
  }
};
