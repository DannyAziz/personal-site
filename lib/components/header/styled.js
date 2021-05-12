import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Header = styled.header`
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
    /* opacity: 0; */
    /* animation: ${fadeIn} 0.275s ease-in;
    animation-fill-mode: forwards;
    animation-delay: 0.275s; */
  }
`;

export const SideMenuButtonContainer = styled.div`
  order: 3;
`;
