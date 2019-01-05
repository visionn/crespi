export const INFO_REDUCER = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_INFO':
      return action.status;
    case 'HIDE_INFO':
      return action.status;
    default:
      return state;
  }
};
