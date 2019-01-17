export const SHOW_INFO = looking => {
  return {
    type: 'SHOW_INFO',
    status: looking,
  };
};
export const HIDE_INFO = () => {
  return {
    type: 'HIDE_INFO',
    status: false,
  };
};
export const LOOKING_AT = (status, language) => {
  return {
    type: 'LOOKING_AT',
    payload: {
      status,
      language,
    },
  };
};
export const DONT_LOOK = () => {
  return {
    type: 'DONT_LOOK',
  }
}
