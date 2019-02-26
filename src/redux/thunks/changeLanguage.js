<<<<<<< HEAD
import { LANGUAGE_ITA, LANGUAGE_ENG } from '../actions/actions';
export const LANGUAGE = language => {
  return (dispatch, getState) => {
    switch (language) {
      case 'it-IT':
        dispatch(LANGUAGE_ITA());
      default:
        dispatch(LANGUAGE_ENG());
=======
import { CHANGE_LANGUAGE, SHOW_INFO } from '../actions/actions';
export const LANGUAGE = (language) => {
  return (dispatch, getState) => {
    switch (language) {
      case 'it-IT':
        dispatch(CHANGE_LANGUAGE('ita'));
      default:
        dispatch(CHANGE_LANGUAGE('eng'));
>>>>>>> 03d2b473717304eb575c5825895ef11c3c3ca3b7
    }
  };
};
