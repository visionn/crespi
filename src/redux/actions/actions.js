export const SHOW_INFO = (looking) => {
  return {
    type: 'SHOW_INFO',
    status: looking
  }
};
export const HIDE_INFO = () => {
  return {
    type: 'HIDE_INFO',
    status: false
  }
};
