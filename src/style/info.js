import styled from 'styled-components';
export const Top = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: red;
  z-index: 3;
`;
export const Title = styled.h1`
  position: relative;
  text-align: center;
  font-family: helvetica;
  font-weight: 900;
`;
export const Box = styled.div`
  position: absolute;
  top: 10%;
  bottom: 30%;
  left: 3%;
  right: 3%;
`;
export const Description = styled.div`
  position: absolute;
  left: 20%;
  right: 20%;
  top: 60%;
  font-size: 1.5 rem;
  font-family: helvetica;
`;
export const Container = styled.div`
  overflow: visible;
`;
export const Exit = styled.button`
  position: relative;
  top: 5%;
  left: 95%;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: red;
  font-size: 5 rem;
`;
