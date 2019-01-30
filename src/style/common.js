import styled from 'styled-components';
export const Title = styled.h1`
  font-weight: bold;
  font-family: helvetica;
`;
export const Subtitle = styled.h4`
  font-weight: bold;
  font-family: helvetica;
`;
export const Body = styled.div`
  font-size: 1.2rem;
  font-family: helvetica;
`;
export const Top = styled.div`
  visibility: inherit;
  top: 3%;
  left: 0;
  right: 0;
  position: sticky;
  z-index: 3;
`;
export const Exit = styled.button`
  position: absolute;
  display: inherit;
  z-index: 5;
  top: 2rem;
  right: 2rem;
  border: none;
  border-radius: 20px;
  background-color: white;
  font-size: 2rem;
`;
export const Root = styled.div`
  @media (min-width: 320px) and (max-width: 1000px) {
    font-size: 120%;
  }
  @media (min-width: 1001px) {
    font-size: 250%;
  }
`;
