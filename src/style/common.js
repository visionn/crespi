import styled from 'styled-components';
export const Title = styled.h1`
  color: ${props => (props.color ? props.color : 'black')};
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  font-family: helvetica;
`;
export const Subtitle = styled.h4`
  text-align: center;
  font-weight: bold;
  font-style: italic;
  font-family: helvetica;
`;
export const Body = styled.div`
  font-size: 1.2rem;
  max-width: 50rem;
  line-height: 1.5em;
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
  width: 2.5rem;
  height: 2.5rem;
  top: 2rem;
  right: 1.5rem;
  font-weight: 300;
  font-family: helvetica;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 2rem;
  padding: 0;
  box-shadow: 0 0 2.0125rem 0.175rem rgba(0, 0, 0, 0.24);
  background-color: rgb(255, 255, 255);
`;
export const Root = styled.div`
  @font-face {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
`;
