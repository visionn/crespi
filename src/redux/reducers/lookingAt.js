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
        controls: {
          ...state.controls,
          minPolarAngle: 0,
          minDistance: 100,
          maxDistance: 100,
        },
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
        controls: {
          ...state.controls,
          maxPolarAngle: Math.PI - Math.PI / 2.1,
          minPolarAngle: Math.PI / 2.1,
          minDistance: 207,
          maxDistance: 207,
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
        },
        controls: {
          maxPolarAngle: Math.PI - Math.PI / 2.1,
          minPolarAngle: Math.PI / 2.1,
          minDistance: 207,
          maxDistance: 207,
          enablePan: false,
          enableDamping: true,
          dampingFactor: 0.2,
          screenSpacePanning: false,
          rotateSpeed: 0.1,
        },
      };
  }
};
