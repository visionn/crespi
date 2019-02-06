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
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 3;
`;
export const Exit = styled.button`
  :before {
    content: "x";
  }
  position: absolute;
  display: inherit;
  z-index: 5;
  width: 2.5rem;
  height: 2.5rem;
  top: 2rem;
  right: 1rem;
  font-weight: 300;
  font-family: helvetica;
  border: none;
  border-radius: 20px;
  font-size: 2rem;
  box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.38);
  background-color: rgb(255, 255, 255);
`;
export const Root = styled.div`
  /* SMARTPHONES PORTRAIT */
  @media only screen and (min-width: 300px) {
    font-size: 200%;
  }
  /* TABLET LANDSCAPE / DESKTOP */
  @media only screen and (min-width: 1024px) {
    font-size: 120%;
  }
`;
