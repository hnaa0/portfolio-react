import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import Header from "./Header";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GolbalStyle = createGlobalStyle`
${reset}

:root {
  --color-purple: #8400FF;
  --color-magenta: #FF00E9;
  --color-orange: #FF804A;
  --color-pink: #F79B99;
  --color-beige: #F8CC8E;
  --color-black: #00000;
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
  return (
    <BrowserRouter>
      <Wrapper>
        <GolbalStyle />
        <Header />
        <AppRouter />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
`;