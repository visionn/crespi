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
export const Toast = styled.div`
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: ${props => (!props.lookingAt ? 'hidden' : 'visible')}
  animation: ${props => (!props.lookingAt ? fadeOut : fadeIn)} 0.25s linear;
  transition: visibility 0.25s linear;
  top: 90%;
  border: none;
  border-radius: 5%;
  color: white;
  background-color: #000004;
  font-size: 1rem;
  :empty {
    display: none;
  }
`;
export const Box = styled.div`
  position: absolute;
  top: 0;
  bottom: 30%;
  left: 3%;
  right: 3%;
`;
export const Title = styled.div`
  position: relative;
  text-align: center;
  font-family: helvetica;
  font-size: 3rem;
  font-weight: 900;
  z-index: 2;
`;
export const Info = styled.button`
  position: absolute;
  left: 1rem;
  top: 1rem;
`;
