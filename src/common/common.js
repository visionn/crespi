import styled from 'styled-components';
export const Title = styled.h1`
  padding: 1rem;
  text-align: center;
  color: rgb(51, 51, 51);
  font-weight: bold;
  font-family: helvetica;
`;
export const Subtitle = styled.h4`
  text-align: center;
  color: rgb(51, 51, 51);
  font-weight: bold;
  font-style: italic;
  font-family: helvetica;
`;
export const Body = styled.div`
  font-size: 1.2rem;
  max-width: 50rem;
  line-height: 1.5em;
  color: rgb(51, 51, 51);
  margin: 0 auto;
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
export const Button = styled.button`
  content: ${props => props.content};
  position: absolute;
  display: inherit;
  width: 3rem;
  height: 3rem;
  color: rgb(51, 51, 51);
  top: 1.4rem;
  right: 1.5rem;
  font-weight: 300;
  font-family: helvetica;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 2rem;
  padding: 0;
  box-shadow: 0 0.375rem 0.65rem 0.1625rem rgba(0, 0, 0, 0.31);
  background-color: rgb(255, 255, 255);
`;
export const Root = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
`;
