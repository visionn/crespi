import styled, { css } from 'styled-components';
import { swapUp, swapDown, fadeIn, fadeOut } from './animations.js';
export const Title = styled.h1`
  color: rgb(51, 51, 51);
  text-align: center;
  font-size: 2.5rem;
`;
export const Subtitle = styled.div`
  text-align: center;
  padding: 0.5rem;
  color: rgb(51, 51, 51);
  font-weight: bold;
  font-style: italic;
  font-size: 1rem;
`;
export const Toasty = styled.div`
  position: absolute;
  z-index: 2;
  font-family: 'Open Sans', sans-serif;
  border-radius: 1rem;
  box-shadow: 0 0.375rem 0.65rem 0.1625rem rgba(0, 0, 0, 0.31);
  background-color: white;
  visibility: ${props => (props.lookingAt ? 'visible' : 'hidden')};
  animation: ${props => (props.lookingAt ? swapUp : swapDown)} 0.25s linear;
  transition: visibility 0.25s linear;
  height: auto;
  margin: 0 1.5rem;
  bottom: 1.5rem;
  overflow: hidden;
  left: 0;
  right: 0;
  transition: all 0.25s;
`;
export const MaxWidth = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`;
