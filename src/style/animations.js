import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
`;
export const fadeOut = keyframes`
  from {
    opacity: 100%;
  }
  to {
    opacity: 0;
  }
`;
