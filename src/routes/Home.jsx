import styled, { keyframes } from "styled-components";
import { forwardRef } from "react";

function Home(props, ref) {
  return (
    <Container ref={(homeRef) => (ref.current[0] = homeRef)}>
      <TextGroup role="banner">
        <Text>PORTFOLIO</Text>
        <Text2>PORTFOLIO</Text2>
        <Text3>PORTFOLIO</Text3>
      </TextGroup>
    </Container>
  );
}

const HomeWithRef = forwardRef(Home);
export default HomeWithRef;

const Bounce = keyframes`
0% {
  transform: translate(-50%, 0%) rotate(135deg);
}

50% {
  transform: translate(-50%, -20%) rotate(135deg);
}

100% {
  transform: translate(-50%, 0%) rotate(135deg);
}
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 152px 16px;
`;

const TextGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;

  &::after {
    content: "";
    position: absolute;
    bottom: -40px;
    left: 50%;
    width: 20px;
    height: 20px;
    border-top: 1.5px solid var(--color-magenta);
    border-right: 1.5px solid var(--color-magenta);
    animation: ${Bounce} 1500ms infinite;
  }
`;

const Text = styled.h2`
  user-select: none;
  font-size: 76px;
  font-weight: 200;
  letter-spacing: 1.2px;
  color: var(--color-gray-200);

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 52px;
  }
`;

const Text2 = styled(Text)`
  font-weight: 400;
  color: var(--color-gray-300);
  margin: 8px 0;
`;

const Text3 = styled(Text)`
  font-weight: 600;
  color: var(--color-gray-400);
`;
