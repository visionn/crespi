import styled from 'styled-components';
import { fadeIn, fadeOut } from './animations.js';
import { Button } from './common';
export const Container = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  overflow: hidden;
  z-index: 1;
  opacity: 5%;
`;
export const Logo = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 1rem;
  font-family: helvetica;
  font-size: 3.3rem;
  font-weight: bold;
  text-background: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
  z-index: 6;
`;
export const Egg = styled.div`
  position: absolute;
  font-family: helvetica;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  visibility: ${props => (props.status ? 'visible' : 'hidden')};
  animation: ${props => (props.status ? fadeIn : fadeOut)} 0.5s ease-out;
  transition: visibility 0.5s linear;
`;
export const ColouredButton = styled(Button)`
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
  color: white;
`;
