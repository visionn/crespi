export const LANGUAGE = (state = '🍕', action) => {
  switch (action.language) {
    case 'CHANGE_LANGUAGE':
      return action.language;
    default:
      return state;
  }
}
