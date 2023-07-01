import styled from "styled-components";

export default function Header() {
  return (
    <>
      <Nav>
        <Title role="Nayoung's Portfolio">NAYOUNG</Title>
        <NavUl role="navigation">
          <li style={{ marginBottom: "12px" }}>
            <a href="#profile">/Profile</a>
          </li>
          <li>
            <a href="#projects">/Projects</a>
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
`;

const Title = styled.h1`
  font-family: "Moirai One", cursive;
  font-size: 76px;
  color: var(--color-magenta);
  cursor: pointer;
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
