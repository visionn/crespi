import { config } from '../../configuration/config';
export const INFO_REDUCER = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_INFO':
      return {
        ...config.info[action.language],
        status: true,
      };
    case 'HIDE_INFO':
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
};
