import styled from 'styled-components';
export const Top = styled.div`
  top: 5%;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 3;
`;
export const Title = styled.div`
  position: relative;
  text-align: center;
  font-family: helvetica;
  font-size: 3rem;
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
  font-size: 1.2rem;
  font-family: helvetica;
`;
export const Container = styled.div`
  overflow: visible;
`;
export const Exit = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 5%;
  border: none;
  border-radius: 20px;
  filter: blur(50%);
  -webkit-filter: blur(50%);
  font-size: 2rem;
`;
