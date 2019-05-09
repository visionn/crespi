import { LANGUAGE_ITA, LANGUAGE_ENG } from '../actions/actions';
export const LANGUAGE = language => {
  return (dispatch, getState) => {
    switch (language) {
      case 'it-IT':
      default:
        dispatch(LANGUAGE_ITA());
    }
  };
};
