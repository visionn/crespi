import { config } from '../../configuration/config';
export const MOVE = (state = '', action) => {
  switch (action.type) {
    case 'MOVE':
      return {
        ...state,
        ...config[action.name],
        status: true,
      }

    case 'DONT_MOVE':
      return {
        ...state,
        status: false,
      }
    default:
      return state;
  }
}
