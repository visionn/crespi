export const language = (state = 'ITA', action) => {
  switch (action.language) {
    case 'ITA':
      return action.language;
    case 'ENG':
      return action.language;
    default:
      return state;
  }
}
