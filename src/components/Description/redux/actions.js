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
