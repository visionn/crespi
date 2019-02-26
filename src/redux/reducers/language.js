export const LANGUAGE = (state = 'ita', action) => {
  switch (action.type) {
<<<<<<< HEAD
    case 'LANGUAGE_ITA':
      return 'ita';
    case 'LANGUAGE_ENG':
      return 'eng';
=======
    case 'CHANGE_LANGUAGE':
      return action.language;
>>>>>>> 03d2b473717304eb575c5825895ef11c3c3ca3b7
    default:
      return state;
  }
};
