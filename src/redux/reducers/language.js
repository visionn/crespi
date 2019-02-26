export const LANGUAGE = (state = 'ita', action) => {
  switch (action.type) {
    case 'LANGUAGE_ITA':
      return 'ita';
    case 'LANGUAGE_ENG':
      return 'eng';
    default:
      return state;
  }
};
