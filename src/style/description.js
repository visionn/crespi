import styled from 'styled-components';
import { fadeIn, fadeOut } from './animations';
export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  max-height: 100%;
  background-color: rgb(255, 255, 255);
  visibility: ${props => (props.status ? 'visible' : 'hidden')};
  animation: ${props => (props.status ? fadeIn : fadeOut)} 0.5s linear;
  transition: all 0.5s;
  transition: visibility 0.5s;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;
export const TopImage = styled.div`
  top: 0;
  padding: 0 0.7rem;
  height: 30vh;
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  transition: height 0.5s;
  -webkit-transition: height 0.5s;
  :hover {
    height: 90vh;
  }
`;
export const Photo = styled.div`
  max-height: 70%;
  padding: 0 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 2.6rem 0.75rem rgba(0, 0, 0, 0.29);
`;
