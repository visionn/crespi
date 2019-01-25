import styled from 'styled-components';
import { swapUp, swapDown, fadeIn, fadeOut } from './animations.js';
export const Title = styled.h2`
  font-weight: bold;
`;
export const Subtitle = styled.h6`
  font-weight: bold;
`;
export const Body = styled.div`
  display: inline-block;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  animation: ${props => (props.show ? swapUp : fadeOut)} 0.25s linear;
  transition: visibility 0.25s linear;
  height: auto;
  position: relative;
  z-index: 3;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
     background: transparent;
  }
`;
export const Container = styled.div`
  display: inline-block;
  position: absolute;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  z-index: 2;
  font-family: helvetica;
  border-radius: 1rem;
  max-height: 90%;
  filter: drop-shadow(0 0 0.5rem black);
  background-color: white;
  visibility: ${props => (props.lookingAt ? 'visible' : 'hidden')};
  animation: ${props => (props.lookingAt ? swapUp : fadeOut)} 0.25s linear;
  transition: visibility 0.25s linear;
  height: ${props => props.height};
  left: 1.5rem;
  right: 1.5rem;
  bottom: 0.5rem;
  :empty {
   display: none;
  }
`;
