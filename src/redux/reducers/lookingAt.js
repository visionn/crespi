import { config } from '../../configuration/config';
export const LOOKING_AT = (state = '', action) => {
  switch (action.type) {
    case 'LOOKING_AT':
      return {
        ...state,
        ...config[action.payload.status].text[action.payload.language],
        position: config[action.payload.status].position,
        color: config[action.payload.status].color,
        Body: '',
        status: true,
        name: action.payload.status,
      };
    case 'DONT_LOOK':
      return {
        ...state,
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        status: false,
      };
    default:
      return {
        ...state,
        position: {
          x: 0,
          y: 0,
          z: 0,
        }
      };
  }
};
