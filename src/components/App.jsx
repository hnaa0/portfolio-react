import { createGlobalStyle } from "styled-components";
import { useRef } from "react";
import styled from "styled-components";
import reset from "styled-reset";
import Header from "./Header";
import Home from "../routes/Home";
import Projects from "../routes/Projects";
import Profile from "../routes/Profile";
import Background from "./Background";
import ScrollToTop from "./ScrollToTop";

const GolbalStyle = createGlobalStyle`
${reset}

:root {
  --color-purple: #8400FF;
  --color-magenta: #FF00E9;
  --color-orange: #FF804A;
  --color-pink: #F79B99;
  --color-beige: #F8CC8E;
  --color-black: #000;
  --color-white: #FFFFFF;
  --color-gray-100: #C9C9C9;
  --color-gray-200: #B0B0B0;
  --color-gray-300: #7D7D7D;
  --color-gray-400: #636363;
  --color-gray-500: #2E2E2E;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit; 
  text-decoration: none; 
  outline: none;
}

body {
  font-family: 'IBM Plex Sans KR', sans-serif;
  color: var(--color-black);
}
`;

function App() {
  const scrollRef = useRef([]);
  return (
    <Wrapper>
      <GolbalStyle />
      <Background />
      <Header scrollRef={scrollRef} />
      <Home ref={scrollRef} />
      <Profile ref={scrollRef} />
      <Projects ref={scrollRef} />
      <ScrollToTop />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  // width: 100%;
`;
