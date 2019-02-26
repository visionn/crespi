export const SHOW_INFO = language => {
  return {
    type: 'SHOW_INFO',
    language,
  };
};
export const SHOW_DESCRIPTION = (model, language) => ({
  type: 'SHOW_DESCRIPTION',
  payload: {
    model,
    language,
  },
});
export const HIDE_DESCRIPTION = () => ({
  type: 'HIDE_DESCRIPTION',
});
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
export const MOVE = name => ({
  type: 'MOVE',
  name,
});
export const DONT_MOVE = () => ({
  type: 'DONT_MOVE',
});
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
export const HIDE_LOADING_SCREEN = () => ({
  type: 'HIDE_LOADING_SCREEN',
});
