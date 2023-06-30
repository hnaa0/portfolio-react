import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Nav>
        <Title>
          <Link to="/">NAYOUNG</Link>
        </Title>
        <NavUl>
          <li style={{ marginBottom: "12px" }}>
            <Link to="/profile">/Profile</Link>
          </li>
          <li>
            <Link to="/projects">/Projects</Link>
          </li>
        </NavUl>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4px 16px;
`;

const Title = styled.h1`
  font-family: "Moirai One", cursive;
  font-size: 76px;
  color: var(--color-magenta);
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > li {
    font-size: 36px;

    &:hover {
      color: var(--color-magenta);
    }
  }
`;
