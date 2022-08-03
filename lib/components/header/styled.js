import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  position: relative;
  height: 79px;
  width: 100%;

  display: grid;
  grid-template-columns: 0.5fr 1.5fr 0.5fr;
  justify-items: center;
  align-items: center;

  @media ${(p) => p.theme.breakpoints.tablet} {
    grid-template-columns: 25% 50% 25%;
  }
`;

export const LogoContainer = styled.div`
  order: 2;
  justify-self: center;
  cursor: pointer;

  @media ${(p) => p.theme.breakpoints.tablet} {
    justify-self: flex-start;
    order: 1;
  }
`;

export const Logo = styled.h1`
  font-weight: 500;
  font-size: 29px;
  line-height: 35px;
  /* identical to box height */

  letter-spacing: 0.05em;
`;

export const DesktopNavContainer = styled.div`
  display: none;
  order: none;

  @media ${(p) => p.theme.breakpoints.tablet} {
    display: block;
    order: 2;
  }
`;

export const ThemeToggleContainer = styled.div`
  position: relative;
  order: 1;
  height: 28px;
  width: 28px;

  svg {
    position: absolute;
  }

  @media ${(p) => p.theme.breakpoints.tablet} {
    order: 3;
    justify-self: flex-end;
  }
`;

export const SideMenuButtonContainer = styled.div`
  order: 3;
  @media ${(p) => p.theme.breakpoints.tablet} {
    order: none;
    display: none;
  }
`;

export const MobileNavContainer = styled.div`
  position: fixed;
  top: 79px;
  left: 0;
  width: 101%;
  background: ${({ theme }) => theme.textColor};
  transition: all 0.5s ease-in;
  z-index: 2;
  pointer-events: ${(p) => (p.open ? "all" : "none")};
`;

export const NavLi = styled.li`
  text-align: center;
  cursor: pointer;

  font-weight: ${(p) => (p.active ? "bold" : "normal")};
`;

export const DesktopUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 0 18px;

  ${NavLi} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const MobileUl = styled.ul`
  list-style: none;

  ${NavLi} {
    font-size: 24px;
    line-height: 29px;

    margin-top: 25px;
    color: ${({ theme }) => theme.backgroundColor};
  }
`;
