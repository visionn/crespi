export default (state, action) => {
  switch (action.type) {
    case: 'ADD_ZOOM':
      return {...state, zoom}
      break;
    case: 'REMOVE_ZOOM':
      break;
    default:
      return state;
  }
}
