import styled, { css } from 'styled-components';
import { swapUp, swapDown, fadeIn, fadeOut } from './animations.js';
export const Title = styled.h1`
  font-size: 2rem;
`;
export const Subtitle = styled.h6`
  font-size: 0.7rem;
`;
export const Toasty = styled.div`
  position: absolute;
  font-size: 1.2rem;
  z-index: 2;
  font-family: helvetica;
  border-radius: 1rem;
  box-shadow: 0 0 2.6rem 0.75rem rgba(0, 0, 0, 0.29);
  background-color: white;
  visibility: ${props => (props.lookingAt ? 'visible' : 'hidden')};
  animation: ${props => (props.lookingAt ? swapUp : fadeOut)} 0.25s linear;
  transition: visibility 0.25s linear;
  height: auto;
  padding: 0 1.5rem;
  margin: 0 1.5rem;
  bottom: 1.5rem;
  overflow: hidden;
  left: 0;
  right: 0;
  transition: all 0.25s;
  ${props => props.description && css`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  `};
`;
export const Container = styled.div`

`;
