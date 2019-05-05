import { keyframes } from 'styled-components';

export const Pulse = keyframes`
  0% {
    background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
  }
  10% {
    background-image: linear-gradient(90deg, #fbda61 0%, #ff5acd 100%);
  }
  20% {
    background-image: linear-gradient(135deg, #fbda61 0%, #ff5acd 100%);
  }
  30% {
    background-image: linear-gradient(180deg, #fbda61 0%, #ff5acd 100%);
  }
  40% {
    background-image: linear-gradient(225deg, #fbda61 0%, #ff5acd 100%);
  }
  50% {
    background-image: linear-gradient(275deg, #fbda61 0%, #ff5acd 100%);
  }
  60% {
    background-image: linear-gradient(320deg, #fbda61 0%, #ff5acd 100%);
  }
  70% {
    background-image: linear-gradient(335deg, #fbda61 0%, #ff5acd 100%);
  }
  80% {
    background-image: linear-gradient(355deg, #fbda61 0%, #ff5acd 100%);
  }
  90% {
    background-image: linear-gradient(358deg, #fbda61 0%, #ff5acd 100%);
  }
  100% {
    background-image: linear-gradient(360deg, #fbda61 0%, #ff5acd 100%);
  }

`;
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
