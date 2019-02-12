import styled from 'styled-components';
import { fadeIn, fadeOut } from './animations';
export const Container = styled.div`
  position: absolute;
  visibility: ${props => (props.status ? 'visible' : 'hidden')};
  animation: ${fadeOut} 0.25s linear;
  transition: visibility 0.25s linear;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 6;
  background-color: #fbda61;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
`;
