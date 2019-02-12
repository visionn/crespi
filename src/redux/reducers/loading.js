export const LOADING = (state = true, action) => {
  switch (action.type) {
    case 'HIDE_LOADING_SCREEN':
      return false;
    default:
      return state;
  }
};
