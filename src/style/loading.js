import styled from 'styled-components';
import { fadeIn, fadeOut, Pulse } from './animations';
export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  visibility: ${props => (props.status ? 'visible' : 'hidden')};
  animation: ${props => (props.status ? 'none' : fadeOut)} 1s ease-out;
  transition: visibility 0.25s;
  z-index: 6;
`;
export const Element = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: helvetica;
  font-size: 3.3rem;
  font-weight: bold;
  text-background: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
  z-index: 7;
`;
