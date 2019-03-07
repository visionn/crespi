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
export const swapUp = keyframes`
  from {
    transform: translateY(5rem);
  }
  to {
    transform: translateY(2%);
  }
`;
export const swapDown = keyframes`
  from {
    transform: translateY(2%);
    opacity: 1;
  }
  to {
    transform: translateY(5rem);
    opacity: 0;
  }
`;
export const slideUp = keyframes`
  from {
    transform: translateY(2rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
