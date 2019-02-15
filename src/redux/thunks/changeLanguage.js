import { CHANGE_LANGUAGE, SHOW_INFO } from '../actions/actions';
export const LANGUAGE = () => {
  return (dispatch, getState) => {
    switch (window.navigator.language) {
      case 'it' || 'it-ch':
        dispatch(CHANGE_LANGUAGE('ita'));
      default:
        dispatch(CHANGE_LANGUAGE('eng'));
    }
  };
};
