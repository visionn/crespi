import styled from 'styled-components';
export const Skeleton = styled.div`
  position: absolute;
  width: 100%;
  height: 70vh;
  top: 0;
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  z-index: 6;
  background-color: #00DBDE;
  background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
`;
