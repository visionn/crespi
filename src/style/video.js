import styled from 'styled-components';
export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50vh;
  transition: height 0.5s;
  -webkit-transition: height 0.5s;
  &:active {
    height: 85vh;
  }
`;
