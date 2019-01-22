import { CHANGE_LANGUAGE, SHOW_INFO } from '../actions/actions';
export const LANGUAGE = () => {
  return (dispatch, getState) => {
    if ((getState.language = !'ita')) {
      dispatch(CHANGE_LANGUAGE('ita'));
      dispatch(SHOW_INFO('ita'));
    } else {
      dispatch(CHANGE_LANGUAGE('eng'));
      dispatch(SHOW_INFO('eng'));
    }
  };
};
