import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed; /*fixiert die navbar*/
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-top: 1px solid black;
  padding: 1rem; /* Space um die Links */
  display: flex; /* zum Layouten */
  justify-content: space-evenly;
  gap: 1rem; /* Space zwischen jedem Link */
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  //background-color: rgb(0, 0, 0);
  color: #000000;
  font-weight: 600;
  font-family: Helvetica, sans-serif;
  text-decoration: none;
  /* border-radius: 5px; */
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navigation() {
  return (
    <StyledNav>
      <NavLink href="/">Spotlight</NavLink>
      <NavLink href="/gallery">Gallery</NavLink>
    </StyledNav>
  );
}
