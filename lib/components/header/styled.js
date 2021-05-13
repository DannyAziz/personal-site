import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  position: relative;
  height: 79px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  justify-items: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  order: 2;
`;

export const Logo = styled.h1`
  font-weight: 500;
  font-size: 29px;
  line-height: 35px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.05em;
`;

export const DesktopNavContainer = styled.div`
  display: none;
  order: none;
`;

export const ThemeToggleContainer = styled.div`
  position: relative;
  order: 1;
  height: 28px;
  width: 28px;

  svg {
    position: absolute;
  }
`;

export const SideMenuButtonContainer = styled.div`
  order: 3;
`;

export const MobileNavContainer = styled.div`
  position: fixed;
  top: 79px;
  left: 0;
  width: 101%;
  background: ${({ theme }) => theme.textColor};
  z-index: 2;
  pointer-events: none;
`;

export const MobileUl = styled.ul`
  list-style: none;

  li {
    margin-top: 25px;
  }
`;

export const NavLi = styled.li`
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  text-align: center;

  color: ${({ theme }) => theme.backgroundColor};
`;
