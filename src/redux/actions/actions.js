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
export const LOOKING_AT = looking => {
  return {
    type: 'LOOKING_AT',
    status: looking,
  };
};
export const LANGUAGE = lang => {
  return {
    type: 'LANGUAGE',
    language: lang,
  };
}
