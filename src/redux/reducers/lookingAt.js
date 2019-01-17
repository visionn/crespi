import { STORE } from '../store/store';
import chiesa from '../../assets/text/ita/chiesa/desc.md';
export const LOOKING_AT = (state = '', action) => {
    if (STORE.language === 'ITA') {
      switch (action.status) {
        case 'chiesa':
          return {
            title: 'Chiesa di crespi',
            subtitle: 'Benvenuto nella chiesa di crespi',
            description: chiesa,
          };
        default:
          return '';
    }
    if (STORE.language === 'ENG') {
      switch (action.status) {
        case 'chiesa':
          return {
            title: 'Lorem ipsum',
            subtitle: 'Lorem impsum dolor sin amet',
            description: chiesa,
          };
        default:
          return ''; 
      }
    }
  }
};
