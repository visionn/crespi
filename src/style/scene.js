import styled from 'styled-components';
import { fadeIn, fadeOut } from './animations.js';
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
  top: 2rem;
  font-family: helvetica;
  font-size: 3.3rem;
  font-weight: bold;
  text-background: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
`;