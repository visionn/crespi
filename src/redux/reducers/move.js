import { config } from '../../configuration/config';
export const MOVE = (state = '', action) => {
  switch (action.type) {
    case 'MOVE':
      return {
        ...state,
        position: config[action.name].position,
        orbitControls: false,
      };

    case 'DONT_MOVE':
      return {
        ...state,
        orbitControls: true,
      };
    default:
      return state;
  }
};
