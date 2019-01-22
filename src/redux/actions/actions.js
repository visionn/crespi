export const SHOW_INFO = language => {
  return {
    type: 'SHOW_INFO',
    language,
  };
};
export const HIDE_INFO = () => {
  return {
    type: 'HIDE_INFO',
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
  };
};
export const CHANGE_LANGUAGE = language => {
  return {
    type: 'CHANGE_LANGUAGE',
    language,
  };
};
