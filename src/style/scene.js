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
  opacity: 25%;
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
export const Color = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: ${props => props.color.first};
  background-image: linear-gradient(
    45deg,
    ${props => props.color.first} 0%,
    ${props => props.color.second} 100%
  );
  transition: all 0.5s;
`;
