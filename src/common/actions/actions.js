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
