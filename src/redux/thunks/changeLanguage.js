import { LANGUAGE_ITA, LANGUAGE_ENG } from '../actions/actions';
export const LANGUAGE = language => {
  return (dispatch, getState) => {
    switch (language) {
      case 'it-IT':
        dispatch(LANGUAGE_ITA());
      default:
        dispatch(LANGUAGE_ENG());
    }
  };
};
