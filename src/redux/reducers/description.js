export const DESCRIPTION = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_DESCRIPTION':
      return {
        ...state,
        status: true,
      };
    case 'HIDE_DESCRIPTION':
      return {
        ...state,
        status: false
      };
    default:
      return state;
  };
};
