const REDUCER = (state = [], action) => {
  switch (action.type) {
    case 'SET_ZOOM':
      return action.zoom;
    default:
      return state;
  }
};
export default REDUCER;
