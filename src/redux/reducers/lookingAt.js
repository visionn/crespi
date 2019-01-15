import mysteryIta from '../../assets/text/ita/mystery/mystery.md';
export const LOOKING_AT = (state = '', action) => {
  switch (action.status) {
    case 'mystery':
      return {
        title: 'Mistero',
        subtitle: 'Ciao mistero',
        description: mysteryIta,
      };
    case 'fabbrica':
      return 'Fabbrica';
    default:
      return '';
  }
};
