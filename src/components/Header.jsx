import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { idx: 0, name: "Home" },
  { idx: 1, name: "Profile" },
  { idx: 2, name: "Projects" },
];

export default function Header({ scrollRef }) {
  const [navIdx, setNavIdx] = useState(null);
  const navRef = useRef([]);

  useEffect(() => {
    scrollRef.current[navIdx]?.scrollIntoView({ behavior: "smooth" });
    setNavIdx(null);
  }, [scrollRef, navIdx]);

  return (
    <>
      <Nav>
        <Title
          onClick={() => {
            setNavIdx(NAV[0].idx);
          }}
          ref={(ref) => (navRef.current[0] = ref)}
          role="Nayoung's Portfolio"
        >
          NAYOUNG
        </Title>
        <NavUl role="navigation">
          <li
            onClick={() => {
              setNavIdx(NAV[1].idx);
            }}
            ref={(ref) => (navRef.current[1] = ref)}
          >
            /Profile
          </li>
          <li
            onClick={() => {
              setNavIdx(NAV[2].idx);
            }}
            ref={(ref) => (navRef.current[2] = ref)}
          >
            /Projects
          </li>
        </NavUl>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4px 16px;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
`;

const Title = styled.h1`
  font-family: "Moirai One", cursive;
  font-size: 76px;
  color: var(--color-magenta);
  cursor: pointer;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 68px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 48px;
    margin-bottom: 12px;
  }
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  & > li {
    font-size: 36px;

    &:hover {
      color: var(--color-magenta);
      cursor: pointer;
    }

    @media ${({ theme }) => theme.device.tablet} {
      font-size: 28px;
    }

    @media ${({ theme }) => theme.device.mobile} {
      font-size: 20px;
    }
  }
`;
