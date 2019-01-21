import { config } from '../../configuration/config';
export const INFO_REDUCER = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_INFO':
      return config.info['ita'];
    case 'HIDE_INFO':
      return '';
    default:
      return state;
  }
};
