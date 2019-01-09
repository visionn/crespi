import styled from 'styled-components';
export const Top = styled.div`
  top: 3%;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 3;
`;
export const Box = styled.div`
  position: absolute;
  top: 0;
  bottom: 30%;
  left: 3%;
  right: 3%;
`;
export const Description = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  z-index: 2;
  font-family: helvetica;
  background-color: red;
  border-radius: 1rem;
  height: 6rem;
  div {
    opacity: 0;
    bottom: 1rem;
  }
  :hover {
    overflow-y: scroll;
    top: 2rem;
    height: auto;
    div {
      opacity: 1;
      display: visible;
    }
  }
`;
export const Container = styled.div`
  overflow: hidden;
`;
export const Exit = styled.button`
  position: absolute;
  z-index: 5;
  top: 2rem;
  right: 2rem;
  border: none;
  border-radius: 20px;
  background-color: white;
  font-size: 2rem;
`;
