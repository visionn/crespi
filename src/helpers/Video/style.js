import styled from 'styled-components';
export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70vh;
  transition: height 0.5s;
  -webkit-transition: height 0.5s;
  -webkit-clip-path: inset(0 0 round 0 0 3rem 3rem);
  clip-path: inset(0 0 round 0 0 3rem 3rem);
`;
