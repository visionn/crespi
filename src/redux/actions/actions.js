export const SHOW_INFO = language => ({
  type: 'SHOW_INFO',
  language,
});
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
export const MOVE = name => ({
  type: 'MOVE',
  name,
});
export const DONT_MOVE = () => ({
  type: 'DONT_MOVE',
});
export const HIDE_LOADING_SCREEN = () => ({
  type: 'HIDE_LOADING_SCREEN',
});
