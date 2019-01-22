import styled from 'styled-components';
import { swapUp, swapDown, fadeOut } from './animations.js';
export const Title = styled.h2`
  font-weight: bold;
`;
export const Subtitle = styled.h6`
  font-weight: bold;
`;
export const Description = styled.div`
  display: inline-block;
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 1%;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  z-index: 2;
  font-family: helvetica;
  border-radius: 1rem;
  height: 6rem;
  filter: drop-shadow(0 0 0.5rem black);
  background-color: white;
  visibility: ${props => (props.lookingAt ? 'visible' : 'hidden')};
  animation: ${props => (props.lookingAt ? swapUp : fadeOut)} 0.25s linear;
  transition: visibility 0.25s linear;
  div {
    opacity: 0;
    bottom: 1rem;
  }
  :hover {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0px;
       background: transparent;
    }
    top: auto;
    height: auto;
    max-height: 90%;
    padding: 1rem 1.5rem;
    div {
      opacity: 1;
      display: visible;
    }
  }
  }
  :empty {
   display: none;
  }
`;
export const Container = styled.div`
  overflow: hidden;
`;
