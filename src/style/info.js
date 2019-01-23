import styled from 'styled-components';
import { fadeIn, fadeOut } from '../style/animations';
export const Container = styled.div`
  position: absolute;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  overflow-y: scroll;
  visibility: ${props => (props.info ? 'visible' : 'hidden')};
  animation: ${props => (props.info ? fadeIn : fadeOut)} 0.25s linear;
  transition: visibility 0.25s linear;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem 1.5rem;
  z-index: 2;
`;
export const Language = styled.button`
  text-align: center;
  top: 1rem;
  background-color: red;
  text-color: white;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.2rem;
`;
export const InfoButton = styled.button`
  border: 0.2rem black solid;
  z-index: 2;
  position: absolute;
  top: 2rem;
  left: 2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: white;
  font-size: 2.5rem;
`;
