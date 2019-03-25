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
  animation: ${props => (props.status ? fadeIn : fadeOut)} 0.25s linear;
  transition: all 0.25s;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;
export const Photo = styled.img`
  max-height: 70%;
  max-width: 95%;
  border-radius: 1rem;
  box-shadow: 0 0 2.6rem 0.75rem rgba(0, 0, 0, 0.29);
`;
export const PhotoContainer = styled.p`
  left: 0;
  right: 0;
  text-align: center;
  margin: 1rem auto;
`;
export const DinamicContainer = styled.div`
  margin: 0 2rem;
`;
const Message = styled.div`
  position: relative;
  line-height: 1.5em;
  font-size: 1.2rem;
  word-wrap: break-word;
  border-radius: 1.5rem;
  padding: 1rem;
  max-width: 50rem;
`;
export const LeftMessage = styled(Message)`
  background-color: rgba(2, 125, 255, 0.2);
  margin: 1rem 2rem 1rem auto;
`;
export const RightMessage = styled(Message)`
  background-color: rgba(0, 255, 255, 0.2);
  margin: 1rem auto 1rem 2rem;
`;
export const PaddedDiv = styled.div`
  padding: 0 1rem;
`;
