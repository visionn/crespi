import styled from 'styled-components';
export const Scene = styled.div`
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
export const Toast = styled.button`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 90%;
  border: none;
  border-radius: 5%;
  color: white;
  background-color: #000004;
  font-size: 2rem;
  :empty {
    display: none;
  }
`;
