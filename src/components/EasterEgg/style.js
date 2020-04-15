import styled from 'styled-components';
import { fadeIn, fadeOut } from '../../common/style/animations';
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
