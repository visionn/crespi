import styled from 'styled-components';
import { fadeIn, fadeOut } from './animations.js'
export const Scene = styled.div`
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
export const Toast = styled.div`
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: ${props => !props.lookingAt || props.info ? 'hidden' : 'visible'}
  animation: ${props => !props.lookingAt || props.info ? fadeOut : fadeIn} 0.25s linear;
  transition: visibility 0.25s linear;
  top: 90%;
  border: none;
  border-radius: 5%;
  color: white;
  background-color: #000004;
  font-size: 1rem;
`;
export const Title = styled.div`
  position: relative;
  text-align: center;
  font-family: helvetica;
  font-size: 3rem;
  font-weight: 900;
  z-index: 2;
`;
