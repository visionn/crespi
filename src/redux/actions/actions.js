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
export const LOOKING_AT = (looking, language) => {
  return {
    type: 'LOOKING_AT',
    status: looking,
    language: language,
  };
};
export const DONT_LOOK = () => {
  return {
    type: 'NOT_LOOK',
  }
}
