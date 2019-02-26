import { config } from '../../configuration/config';
export const MOVE = (state = '', action) => {
  switch (action.type) {
    case 'MOVE':
      return {
        ...state,
        position: config[action.name].position,
        isTargetCenter: false,
      };

    case 'DONT_MOVE':
      return {
        ...state,
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        isTargetCenter: true,
      };
    default:
      return state;
  }
};
