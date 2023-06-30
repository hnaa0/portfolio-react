import styled, { keyframes } from "styled-components";

export default function Background() {
  return (
    <Container>
      <Wave></Wave>
      <Wave2></Wave2>
      <Wave3></Wave3>
    </Container>
  );
}

const drift = keyframes`
from { 
    transform: rotate(0deg); 
}

to { 
    transform: rotate(360deg); 
}
`;

const Container = styled.div`
  width: 100%;
  //   height: 100%;
  positon: relative;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(#e8a, 1),
      rgba(#def, 0) 80%,
      rgba(white, 0.5)
    );
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }
`;

const Wave = styled.div`
  position: fixed;
  z-index: -10;
  opacity: 0.05;
  top: 70%;
  left: 50%;
  width: 1600px;
  height: 1600px;
  margin-left: -250px;
  margin-top: -250px;
  background-color: #f8cc8e;
  border-radius: 43%;
  transform-origin: 50% 47%;
  animation: ${drift} 5500ms infinite linear;
`;

const Wave2 = styled(Wave)`
  opacity: 0.1;
  background-color: #f8cc8e;
  animation: ${drift} 7500ms infinite linear;
`;

const Wave3 = styled(Wave)`
  background-color: #ff804a;
  animation: ${drift} 11000ms infinite linear;
`;
