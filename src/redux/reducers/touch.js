import { config } from '../../configuration/config';
export const TOUCH = (state='', action) => {
  switch (action.type) {
    case 'TOUCH':
      return {
        ...state,
        ...config[action.name],
        status: true,
      }

    case 'DONT_TOUCH':
      return {
        ...state,
        status: false,
      }
    default:
      return state;
  }
}
