import styled, { css } from 'styled-components';
import { swapUp, swapDown, fadeIn, fadeOut } from './animations.js';
export const Title = styled.h1`
  color: ${props => props.color ? props.color : 'black'};
  text-align: center;
  font-size: 2.5rem;
`;
export const Subtitle = styled.div`
  text-align: center;
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
`;
export const Toasty = styled.div`
  position: absolute;
  z-index: 2;
  font-family: helvetica;
  border-radius: 1rem;
  box-shadow: 0 0 2.6rem 0.75rem rgba(0, 0, 0, 0.29);
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
