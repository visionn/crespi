import styled from 'styled-components';
import { fadeIn, fadeOut } from './animations.js';
export const Container = styled.div`
  padding: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  overflow: hidden;
  position: absolute;
  z-index: 1;
`;
export const Button = styled.button`
  z-index: 2;
  position: absolute;
  top: 2rem;
  left: 2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: white;
  font-size: 2rem;
`;
