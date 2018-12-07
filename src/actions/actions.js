export const ADD_ZOOM = zoom => {
  return {
    type: 'ADD_ZOOM',
    payload: {
      zoom: 2
    }
  }
};
export const REMOVE_ZOOM = zoom => {
  return {
    type: 'REMOVE_ZOOM',
    payload: {
      zoom: 1
    }
  }
};
