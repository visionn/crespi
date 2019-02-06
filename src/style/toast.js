import styled from 'styled-components';
import { swapUp, swapDown, fadeIn, fadeOut } from './animations.js';
export const Title = styled.h1`
  font-size: 2em;
`;
export const Subtitle = styled.h6`
  font-size: 0.7em;
`;
export const Toasty = styled.div`
  display: inline-block;
  position: absolute;
  padding: 0 1.5rem;
  font-size: 1.2rem;
  z-index: 2;
  font-family: helvetica;
  border-radius: 1rem;
  box-shadow: 0px 0px 2.6rem 0.75rem rgba(0, 0, 0, 0.29);
  background-color: white;
  visibility: ${props => (props.lookingAt ? 'visible' : 'hidden')};
  animation: ${props => (props.lookingAt ? swapUp : fadeOut)} 0.25s linear;
  transition: visibility 0.25s linear;
  height: auto;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 1.5rem;
  /* SMARTPHONES PORTRAIT */
  @media (min-width: 300px) and (orientation: portrait) {
    font-size: 150%;
  }
  /* TABLET LANDSCAPE / DESKTOP */
  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: 100%;
  }
`;
