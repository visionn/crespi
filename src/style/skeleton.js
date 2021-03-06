import styled from 'styled-components';
export const Skeleton = styled.div`
  position: absolute;
  width: 100%;
  height: 70vh;
  top: 0;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  z-index: 6;
  background-color: #00dbde;
  background-image: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
`;
