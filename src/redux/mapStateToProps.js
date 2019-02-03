export const mapStateToProps = state => ({
  lookingAt: state.looking,
  language: state.language,
  info: state.info,
  description: state.description,
  touch: state.touch,
});
