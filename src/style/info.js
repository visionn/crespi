import styled from 'styled-components';
import { slideUp, fadeIn, fadeOut } from './animations.js';
export const Top = styled.div`
  top: 3%;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 3;
`;
export const Box = styled.div`
  position: absolute;
  top: 0;
  bottom: 30%;
  left: 3%;
  right: 3%;
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
  visibility: ${props => props.lookingAt ? 'visible' : 'hidden'};
  animation: ${props => props.lookingAt ? fadeIn : fadeOut} 0.5s linear;
  transition: visibility 0.5s linear;
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
    max-height: 80%;
    padding: 1rem 1.5rem;
    transition: slideUp 2s cubic-bezier(.83, -0.43, .21, 1.42);
    div {
      opacity: 1;
      display: visible;
    }
  }
`;
export const Container = styled.div`
  overflow: hidden;
`;
export const Exit = styled.button`
  position: absolute;
  z-index: 5;
  top: 2rem;
  right: 2rem;
  border: none;
  border-radius: 20px;
  background-color: white;
  font-size: 2rem;
`;
