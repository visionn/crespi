import styled from 'styled-components';
export const Scene = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: relative;
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
