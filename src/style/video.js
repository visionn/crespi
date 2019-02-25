import styled from 'styled-components';
export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 30vh;
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  transition: height 0.5s;
  -webkit-transition: height 0.5s;
  :hover {
    height: 90vh;
  }
`;
