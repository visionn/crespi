import styled from 'styled-components';
export const Container = styled.div`
  position: absolute;
  visibility: ${props => (props.info ? 'visible' : 'hidden')};
  background-color: white;
  top: 1rem;
  left: 1rem;
  bottom: 1rem;
  right: 1rem;
  z-index: 2;
`;
export const InfoButton = styled.button`
  z-index: 2;
  position: absolute;
  top: 2rem;
  left: 2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: white;
  font-size: 2rem;
`;
