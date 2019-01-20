export const LANGUAGE = (state = 'ita', action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return action.language;
    default:
      return state;
  }
};
