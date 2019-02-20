import { CHANGE_LANGUAGE, SHOW_INFO } from '../actions/actions';
export const LANGUAGE = language => {
  return (dispatch, getState) => {
    switch (language) {
      case 'it-IT':
        dispatch(CHANGE_LANGUAGE('ita'));
      default:
        dispatch(CHANGE_LANGUAGE('eng'));
    }
  };
};
