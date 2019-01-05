export const LOOKING_AT = (state = '', action) => {
  switch (action.status) {
    case 'mystery':
      return 'Mystery';
    case 'fabbrica':
      return 'Fabbrica';
    default:
      return '';
  }
}
