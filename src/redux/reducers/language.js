export const LANGUAGE = (state = 'ita', action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        ...action.language,
      };
    default:
      return state;
  }
};
