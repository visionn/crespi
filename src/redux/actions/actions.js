<<<<<<< HEAD
export const SHOW_INFO = language => ({
  type: 'SHOW_INFO',
  language,
});
=======
export const SHOW_INFO = language => {
  return {
    type: 'SHOW_INFO',
    language,
  };
};
>>>>>>> 03d2b473717304eb575c5825895ef11c3c3ca3b7
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
<<<<<<< HEAD
export const HIDE_INFO = () => ({
  type: 'HIDE_INFO',
});
export const LOOKING_AT = (status, language) => ({
  type: 'LOOKING_AT',
  payload: {
    status,
    language,
  },
});
export const DONT_LOOK = () => ({
  type: 'DONT_LOOK',
});
export const LANGUAGE_ITA = () => ({
  type: 'LANGUAGE_ITA',
});
export const LANGUAGE_ENG = () => ({
  type: 'LANGUAGE_ENG',
});
=======
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
>>>>>>> 03d2b473717304eb575c5825895ef11c3c3ca3b7
export const HIDE_LOADING_SCREEN = () => ({
  type: 'HIDE_LOADING_SCREEN',
});
