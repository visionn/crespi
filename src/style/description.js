import styled from 'styled-components';
import { slideUp, fadeOut } from './animations';
export const Container = styled.div`
  position: absolute;
  margin: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 1.5rem 1rem;
  z-index: 2;
  background: white;
  visibility: ${props => props.status ? 'visible' : 'hidden'};
  animation: ${props => props.status ? slideUp : fadeOut} 0.5s linear;
  transition: visibility 0.5s;
  overflow: auto;
`;
