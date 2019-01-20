export const INFO_REDUCER = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_INFO':
      return '# hello markdown';
    case 'HIDE_INFO':
      return null;
    default:
      return state;
  }
};
