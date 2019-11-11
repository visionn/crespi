import { config } from '../../configuration/config';
export const DESCRIPTION = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_DESCRIPTION':
      return {
        ...state,
        ...config[action.payload.model].text[action.payload.language],
        name: action.payload.model,
        status: true,
      };
    case 'HIDE_DESCRIPTION':
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
};
