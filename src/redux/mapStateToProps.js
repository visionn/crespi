export const mapStateToProps = state => ({
  lookingAt: state.looking,
  language: state.language,
  description: state.description,
  loading: state.loading,
});
